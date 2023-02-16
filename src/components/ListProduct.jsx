import React, { Component } from "react";
import Airpods from "./Airpods";
import Iphone from "./Iphone";
import Macbook from "./Macbook";
import Samsung from "./Samsung";

function ListProduct() {
  return (
    <div className='product'>
      <div className='list'>
        <h3>List Product</h3>
        <Airpods />
        <Macbook />
        <Iphone />
        <Samsung />
      </div>
    </div>
  );
}

export default ListProduct;
