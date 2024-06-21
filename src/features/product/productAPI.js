export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // const response = await fetch("https://fakestoreapi.com/products/");
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  // filter = {"category":"lipstick"}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:3002/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
