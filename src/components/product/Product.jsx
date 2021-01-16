import { Plus as PlusIcon, Minus as MinusIcon } from 'react-feather';
import { currencyFormat } from '../../utils'
import styles from './Product.module.css'
import useCart from '../../hooks/useCart';

const Product = ({ product }) => {
    const { get, addItem, substractItem } = useCart()
    const cartItem = get(product.id)

    return (
        <article className={styles.product}>
            <div className={styles.product__image}>
                <img src={product.image} alt={product.description} />
            </div>
            <div className={styles.product__info}>
                <p><strong>{product.brand}</strong> {product.description}</p>
                <strong>{currencyFormat(product.price)}</strong>
            </div>
            <div className={styles.product__actions}>
                {cartItem ? (
                    <div className={styles.product__cart_control}>
                        <button onClick={() => substractItem(product)}>
                            <MinusIcon size={12} />
                        </button>
                        <span>{cartItem.__quantity}</span>
                        <button onClick={() => addItem(product)}>
                            <PlusIcon size={12} />
                        </button>
                    </div>
                ) : (
                        <div>
                            <button
                                className={styles.product__add_button}
                                onClick={() => addItem(product)}
                            >Agregar</button>
                        </div>
                    )}
            </div>
        </article>
    )
}

export default Product
