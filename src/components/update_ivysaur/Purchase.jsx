import React, { Component } from 'react';
import Cart from './Cart';
import Change from './Change';
import "./index.css"

function Purchase() {
    return (
        <div className="purchase">
            <div className="your-cart">
                <h3>Your Cart</h3>
            </div>
            <Cart/>
            <Change/>
        </div>
     );
}

export default Purchase;