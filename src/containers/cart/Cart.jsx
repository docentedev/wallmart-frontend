import React from 'react'
import useCart from '../../hooks/useCart';

function Cart() {
    const { cartItems, addItem, substractItem, removeItem, getTotal } = useCart()

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
                {getTotal()}
            </div>
        </div>
    );
}

export default Cart;
