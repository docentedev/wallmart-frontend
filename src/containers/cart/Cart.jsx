import CartItem from '../../components/cart-item/CartItem'
import useCart from '../../hooks/useCart'
import useDiscounts from '../../hooks/useDiscounts'
import { currencyFormat, messageDiscountOk, messageDiscountNok, showDiscountNok } from '../../utils'
import styles from './Cart.module.css'

function Cart() {
    const {
        cartItems,
        cartItemsByBrand,
        getTotal,
    } = useCart()
    const { applyDiscounts } = useDiscounts()

    const {
        discounts: discountsByItems,
        total: totalWithDiscount,
    } = applyDiscounts(cartItemsByBrand)

    const msgDiscountOk = messageDiscountOk(discountsByItems)
    const msgDiscountNok = messageDiscountNok(discountsByItems)

    return (
        <div className={styles.cart_container}>
            {cartItems.length > 0 ? (<div className={styles.cart_container__cart_card}>
                <h1>Resumen</h1>
                <div>
                    {cartItems.map((product, i) => (
                        <CartItem product={product} key={i} />
                    ))}
                </div>
                <div className={styles.cart_container__cart_card__resume}>
                    <div className={styles.cart_container__cart_card__resume__discountNok}>
                        {showDiscountNok(msgDiscountOk, msgDiscountNok)}
                    </div>
                    <div className={styles.cart_container__cart_card__resume__item}>
                        <div>Subtotal de productos:</div>
                        <div>{currencyFormat(getTotal())}</div>
                    </div>
                    {msgDiscountOk.length > 0 && (
                        <div className={styles.cart_container__cart_card__resume__item}>
                            <div>Descuento por marca:</div>
                            <div>-{currencyFormat(msgDiscountOk[0].discount)}</div>
                        </div>
                    )}
                    <div className={styles.cart_container__cart_card__resume__itemTotal}>
                        <div>Total a pagar:</div>
                        <div>{currencyFormat(totalWithDiscount)}</div>
                    </div>
                    {msgDiscountOk.length > 0 && (
                        <div className={styles.cart_container__cart_card__resume__discountOk}>
                            {msgDiscountOk[0].text}
                        </div>
                    )}
                </div>
            </div>) : (
                    <div className={styles.cart_container__no_product}>Aun no ha agregado ningun producto</div>
                )}
        </div>
    );
}

export default Cart;
