import { Plus as PlusIcon, Minus as MinusIcon } from 'react-feather'
import useCart from '../../hooks/useCart'
import { currencyFormat } from '../../utils'
import styles from './CartItem.module.css'

const CartItem = ({ product, displayActions = false }) => {
    const { addItem, substractItem, removeItem } = useCart()

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
                {displayActions && <div>
                    <button onClick={() => substractItem(product)}>
                        <MinusIcon size={12} />
                    </button>
                    <button onClick={() => addItem(product)}>
                        <PlusIcon size={12} />
                    </button>
                    <button onClick={() => removeItem(product)}>Quitar</button>
                </div>}
            </div>
        </div>
    )
}

export default CartItem
