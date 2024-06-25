export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    console.log(userId);
    const response = await fetch(
      "http://localhost:3002/orders/?user.id=" + userId
    );
    const data = await response.json();
    await console.log(data);
    resolve({ data });
  });
}
