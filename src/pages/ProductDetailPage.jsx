import React from "react";
import ProductDetail from "../features/productlist/components/ProductDetail";
import NavBar from "../features/navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
    </div>
  );
};

export default ProductDetailPage;
