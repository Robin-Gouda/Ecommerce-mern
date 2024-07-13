import React from "react";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/productList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Home;
