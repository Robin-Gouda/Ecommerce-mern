export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/products/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/products/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    console.log(update);
    const response = await fetch(
      "http://localhost:3002/products/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category": ["lipstick","mascarra"]}
  // sort = {_sort:"price",asce}
  // Pagination = {_page:1,_limit=0}
  // TODO : on server we will support multi values in filter
  // TODO : Server will filter deleted Products in case of non-admin
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
    console.log(queryString);
    const response = await fetch(
      "http://localhost:3002/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/category");
    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code url
    const response = await fetch("http://localhost:3002/brands");
    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}

// fetchBrands();
