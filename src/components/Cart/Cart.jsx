import React from 'react'
import { X as CloseIcon } from 'react-feather'
import useCart from '../../hooks/useCart'

import { currencyFormat } from '../../utils'
import CartItem from '../cart-item/CartItem'
import styles from './Cart.module.css'

function Cart() {
    const { cartItems, getTotal } = useCart()
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (cartItems.length > 0) setShow(true)
    }, [cartItems])

    return (
        <div className={`${styles.cart} ${show ? styles.cartShow : styles.cartHide}`}>
            {cartItems.length > 0 && show ? (
                <div className={styles.cart__card} >
                    <div className={styles.cart__card__header}>
                        <button onClick={() => setShow(false)}>
                            <CloseIcon />
                        </button>
                        <h3>Resumen</h3>
                    </div>
                    <div className={styles.cart_item_container}>
                        {cartItems.map((product, i) => (
                            <CartItem product={product} key={i} />
                        ))}
                    </div>
                    <div>{currencyFormat(getTotal())}</div>
                </div>
            ) : (
                    <div className={styles.cart__button_open}>
                        <button onClick={() => setShow(true)}>Carrito</button>
                    </div>
                )}
        </div>
    );
}

export default Cart;
