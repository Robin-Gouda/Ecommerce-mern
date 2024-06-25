export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  // get all item of the user's cart and then delete each item
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    for (let item of items) {
      console.log(item);
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
