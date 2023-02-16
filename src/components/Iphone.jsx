import React, { Component } from "react";
import iphone from "../assets/iPhone-14-Pro-Max-3.jpg";

function Iphone() {
  return (
    <div className='hr'>
      <div className='airpods'>
        <div className='image'>
          <img src={iphone} alt='' />
        </div>

        <div className='content'>
          <h5>Iphone 14 Promax</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            beatae voluptatem eum modi inventore neque nemo enim possimus
          </p>
        </div>

        <div className='quantity'>
          <button>1</button>
          <p>12 USD</p>
        </div>
      </div>
      <div className="mua">
        <button>mua</button>

      </div>
      <hr />
    </div>
  );
}

export default Iphone;
