export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // const response = await fetch("https://fakestoreapi.com/products/");
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["lipstick","fish",...]}
  //sort = {_sort:"price" }

  //todo: on server we will support multi values in filter
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    //todo we will  not hard-code server value
    const response = await fetch(
      "http://localhost:3002/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
