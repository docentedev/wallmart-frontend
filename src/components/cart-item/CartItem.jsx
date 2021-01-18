import { currencyFormat } from '../../utils'
import styles from './CartItem.module.css'

const CartItem = ({ product }) => {

    return (
        <div className={styles.cart_item}>
            <div>
                <img src={product.image} alt={product.description} />
            </div>
            <div className={styles.cart_item__description}>
                <span>{product.brand}</span>
                <p>{product.description}</p>
                <strong>Cantidad: {product.__quantity}</strong>
            </div>
            <div>
                <div>
                    {currencyFormat(product.price)}
                </div>
            </div>
        </div>
    )
}

export default CartItem
