import React from "react";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/productList";

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
