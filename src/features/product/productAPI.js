export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // const response = await fetch("https://fakestoreapi.com/products/");
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":["lipstick","fish",...]}
  //sort = {_sort:"price" }
  //pagination = {_page:1,_per_page:10}
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

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //todo we will  not hard-code server value
    const response = await fetch(
      "http://localhost:3002/products?" + queryString
    );
    const data = await response.json();
    // console.log(await response);
    // const totalItems = await response.headers.get("X-Total-Count");
    // resolve({data:{products:data, totalItems:+totalItems}})
    resolve({ data });
  });
}
