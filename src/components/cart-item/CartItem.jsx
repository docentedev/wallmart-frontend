import {
    Plus as PlusIcon,
    Minus as MinusIcon,
    Trash as TrashIcon,
} from 'react-feather'
import { currencyFormat } from '../../utils'
import styles from './CartItem.module.css'
import useCart from '../../hooks/useCart'

const CartItem = ({ product }) => {
    const { removeItem, addItem, substractItem } = useCart('')
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
            <div className={styles.cart_item__actions}>
                <div>
                    <button onClick={() => substractItem(product)}>
                        <MinusIcon size={16} />
                    </button>
                    <button onClick={() => addItem(product)}>
                        <PlusIcon size={16} />
                    </button>
                    <button onClick={() => removeItem(product)}>
                        <TrashIcon size={16} />
                    </button>
                </div>
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
