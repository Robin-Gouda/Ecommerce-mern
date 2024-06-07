import React from "react";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/productlist/productList";

const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
};

export default Home;
