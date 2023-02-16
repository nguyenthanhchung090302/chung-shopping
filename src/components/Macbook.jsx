import React, { Component } from "react";
import acbook from "../assets/macbook-pro-14-inc.jpg";

function Macbook() {
  return (
    <div className='hr'>
      <div className='airpods'>
        <div className='image'></div>
        <img src={acbook} alt='' />
        <div className='content'>
          <h5>Macbook</h5>
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

export default Macbook;
