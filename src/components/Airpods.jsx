import React, { Component } from "react";
import airpod from "../assets/apple-airpods-pro-2-2022-didongviet.png";

function Airpods() {
  return (
    <div className='hr'>
      <div className='airpods'>
        <div className='image'>
          <img src={airpod} alt='' />
        </div>

        <div className='content'>
          <h5>Air Pods Pro</h5>
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

export default Airpods;
