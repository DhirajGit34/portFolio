import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../utils/data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire. It's Dhiraj</h1>
        <p className="pl-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className="pl-list">
        {/* fatch items 4m data.js */}
        {products.map((items) => (
          <Product key={items.id} img={items.img} link={items.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
