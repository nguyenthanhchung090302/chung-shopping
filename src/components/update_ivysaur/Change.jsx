import React, { Component } from 'react';
 function Change() {
    return ( 
        <div className='item'>
        <div className="empty">
        <div className='Cart-1'>
        <div className="price">
            <p>1</p>
            <p>Lorem ipsum</p>
            <p>12 USD</p>
            <p>1</p>
            <p>12 USD</p>
            <div className='button'>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
        <hr/>

    </div>
    <p>Empty product in your cart</p>
    <hr/>
    </div>
    <div className='in-cart'>
    <p>There are 5 items in your shopping cart</p>
    <p className="usd">12 USD</p>
    </div>
    
    </div>
     );
 }
 
 export default Change;