import React, { Component } from "react";
import samsung from "../assets/sammsung-ultra.png";

function Samsung() {
  return (
    <div className="hr">
    <div className='airpods'>
      <div className='imag'>
        <img src={samsung} alt='' />
      </div>

      <div className='content'>
        <h5>Sam Sung Galaxy S22 Ultra</h5>
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
    </div>
  );
}

export default Samsung;
