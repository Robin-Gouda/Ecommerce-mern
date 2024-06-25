export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}
