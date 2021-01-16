import React from 'react'
import styles from './Cart.module.css'
import { X as CloseIcon } from 'react-feather';

import { currencyFormat, calcTotal } from '../../utils'

function Cart({ cartItems, removeItem, addItem, substractItem }) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (cartItems.length > 0) setShow(true)
    }, [cartItems])

    return cartItems.length > 0 ? (
        <div className={`${styles.cart} ${show ? styles.cartShow : styles.cartHide}`}>
            {show ? (
                <div className={styles.cart__card} >
                    <div className={styles.cart__card__header}>
                        <button onClick={() => setShow(false)}>
                            <CloseIcon />
                        </button>
                    </div>
                    { cartItems.map((e, i) => (
                        <div key={i} >
                            {e.description} | {e.__quantity}<br />
                            {currencyFormat(e.price * e.__quantity)}
                            <button onClick={() => substractItem(e)}>-</button>
                            <button onClick={() => addItem(e)}>+</button>
                            <button onClick={() => removeItem(e)}>Quitar</button>
                        </div>
                    ))
                    }
                    < div >
                        {currencyFormat(calcTotal(cartItems))}
                    </div >
                </div >
            ) : (
                    <div className={styles.cart__button_open}>
                        <button onClick={() => setShow(true)}>Carrito</button>
                    </div>
                )}
        </div >
    ) : (<span />);
}

export default Cart;
