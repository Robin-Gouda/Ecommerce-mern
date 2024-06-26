export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/users/" + userId);
    const data = await response.json();
    await console.log(`i was called fetchLoggedInUser: ${response}`);
    resolve({ data });
  });
}

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    // console.log(userId);
    const response = await fetch(
      "http://localhost:3002/orders/?user.id=" + userId
    );
    const data = await response.json();
    // await console.log(data);
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    await console.log(`i was called updateUser: ${response}`);
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}
