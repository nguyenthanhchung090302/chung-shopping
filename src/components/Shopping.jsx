import React, { Component } from "react";

import logo from "../assets/Logo-Rikkei.png";

import ListProduct from "./ListProduct";
import Purchase from "./update_ivysaur/Purchase";


function Shopping() {
  return (
    <div className='shopping-cart'>
      <div className='shopping'>
        <img src={logo} />
        <h2>Project - Shopping Cart</h2>
      </div>
      <div className="rikkei">
      <ListProduct />
      <Purchase/>
      </div>
    </div>
  );
}

export default Shopping;
