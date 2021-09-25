import React from 'react'
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    // let total = 0;
    // for(const prodect of cart){
    //     total = total + prodect.price;
    // }

    const totalPrice = cart.reduce((prev,curr)=>{
        return prev + curr.price;
    },0)



    return (
        <div>
            <h1>Total Prodect: {cart.length}</h1>
            <h2>Total Price: {totalPrice.toFixed(2)}</h2>
        </div>
    )
}

export default Cart
