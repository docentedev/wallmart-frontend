import React from 'react'

const calcTotal = (cartItems) => {
    return cartItems.reduce((prev, curr) => prev + (curr.price * curr.__quantity), 0)
}

function Cart({ cartItems, removeItem, addItem, substractItem }) {
    return (
        <div>
            {cartItems.map((e, i) => (
                <div key={i} >
                    {e.description} | {e.__quantity}
                    <button onClick={() => substractItem(e)}>-</button>
                    <button onClick={() => addItem(e)}>+</button>
                    <button onClick={() => removeItem(e)}>Quitar</button>
                </div>
            ))}
            <div>
                {calcTotal(cartItems)}
            </div>
        </div>
    );
}

export default Cart;
