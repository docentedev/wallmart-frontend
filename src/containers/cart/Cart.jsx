import CartItem from '../../components/cart-item/CartItem'
import useCart from '../../hooks/useCart'
import useDiscounts from '../../hooks/useDiscounts'
import { currencyFormat, messageDiscountOk, messageDiscountNok } from '../../utils'

const showDiscounNok = (ok, nok) => {
    if (nok.length > 0 && nok[0].discount > (ok.length > 0 ? ok[0].discount : 0))
        return (<div>{nok[0].text}</div>)
    return ''
}

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
        <div>
            {cartItems.map((product, i) => (
                <CartItem product={product} key={i} />
            ))}
            <div>
                {showDiscounNok(msgDiscountOk, msgDiscountNok)}
                <div>
                    Subtotal de productos: {currencyFormat(getTotal())}<br />
                </div>
                {msgDiscountOk.length > 0 && (
                    <div>
                        Descuento por marca: -{currencyFormat(msgDiscountOk[0].discount)}
                    </div>
                )}
                <div>
                    Total a pagar: {currencyFormat(totalWithDiscount)}
                </div>
                {msgDiscountOk.length > 0 && (<div>{msgDiscountOk[0].text}</div>)}
            </div>
        </div>
    );
}

export default Cart;
