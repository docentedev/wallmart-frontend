const removeItem = (cartItems, product) => {
    let prevItems = cartItems
    const itemExist = prevItems.find(i => i.id === product.id)
    if (itemExist) {
        return cartItems.filter(ci => ci.id !== product.id)
    }
}

const substractItem = (cartItems, product) => {
    let prevItems = cartItems
    const itemExist = prevItems.find(i => i.id === product.id)

    if (itemExist) {
        if (itemExist.__quantity === 1) {
            return removeItem(cartItems, product)
        }
        return cartItems.map(ci => ci.id === product.id ? ({
            ...ci,
            __quantity: ci.__quantity - 1
        }) : ({
            ...ci
        }))
    }
}

const addItem = (cartItems, product) => {
    let prevItems = cartItems
    const itemExist = prevItems.find(i => i.id === product.id)
    if (itemExist) {
        return cartItems.map(ci => ci.id === product.id ? ({
            ...ci,
            __quantity: ci.__quantity + 1
        }) : ({
            ...ci
        }))
    }
    return [...cartItems, ({
        ...product,
        __quantity: 1
    })]
}

const initialState = {
    items: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART__ADD_PRODUCT':
            return {
                ...state,
                items: addItem(state.items, action.payload),
            }
        case 'CART__SUBSTRACT_PRODUCT':
            return {
                ...state,
                items: substractItem(state.items, action.payload),
            }
        case 'CART__REMOVE_PRODUCT':
            return {
                ...state,
                items: removeItem(state.items, action.payload),
            }
        default:
            return state
    }
}

export default reducer