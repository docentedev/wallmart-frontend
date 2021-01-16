import { useDispatch, useSelector } from 'react-redux'
import { addItemAction, substractItemAction, removeItemAction } from '../store/cart/actions';

const useCart = () => {
    const cartItems = useSelector(state => state.cart.items)
    
    const dispatch = useDispatch()

    const get = (id) => cartItems.find(item => item.id === id)
    const addItem = (product) => dispatch(addItemAction(product))
    const removeItem = (product) => dispatch(removeItemAction(product))
    const substractItem = (product) => dispatch(substractItemAction(product))
    const getTotal = () => cartItems.reduce((prev, curr) => prev + (curr.price * curr.__quantity), 0)

    return { cartItems, addItem, removeItem, substractItem, get, getTotal }
}

export default useCart