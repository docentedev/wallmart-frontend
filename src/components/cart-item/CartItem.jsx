import { Plus as PlusIcon, Minus as MinusIcon } from 'react-feather'
import useCart from '../../hooks/useCart'
import { currencyFormat } from '../../utils'
import styles from './CartItem.module.css'

const CartItem = ({ product, }) => {
    const { addItem, substractItem, removeItem } = useCart()

    return (
        <div className={styles.cart_item}>
            <div>
                <img src={product.image} alt={product.description} />
            </div>
            <div>
                <span>{product.brand}</span>
                <p>{product.description}</p>
                <strong>Cantidad: {product.__quantity}</strong>
            </div>
            <div>
                <div>
                    {currencyFormat(product.price)}
                </div>
                <div>
                    <button onClick={() => substractItem(product)}>
                        <MinusIcon size={12} />
                    </button>
                    <button onClick={() => addItem(product)}>
                        <PlusIcon size={12} />
                    </button>
                    <button onClick={() => removeItem(product)}>Quitar</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
