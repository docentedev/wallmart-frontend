import React from 'react'

const useCart = () => {
    const [cartItems, setCartItems] = React.useState([])

    const addItem = (product) => {
        let prevItems = cartItems
        const itemExist = prevItems.find(i => i.id === product.id)
        if (itemExist) {
            setCartItems(cartItems.map(ci => ci.id === product.id ? ({
                ...ci,
                __quantity: ci.__quantity + 1
            }) : ({
                ...ci
            })))
        } else {
            setCartItems([...cartItems, ({
                ...product,
                __quantity: 1
            })])
        }
    }

    const removeItem = (product) => {
        let prevItems = cartItems
        const itemExist = prevItems.find(i => i.id === product.id)
        if (itemExist) {
            setCartItems(cartItems.filter(ci => ci.id !== product.id))
        }
    }

    const substractItem = (product) => {
        let prevItems = cartItems
        const itemExist = prevItems.find(i => i.id === product.id)

        if (itemExist) {
            if (itemExist.__quantity === 1) {
                removeItem(product)
            } else {
                setCartItems(cartItems.map(ci => ci.id === product.id ? ({
                    ...ci,
                    __quantity: ci.__quantity - 1
                }) : ({
                    ...ci
                })))
            }
        }
    }

    const get = (id) => {
        return cartItems.find(item => item.id === id)
    }

    return { cartItems, addItem, removeItem, substractItem, get }
}

export default useCart