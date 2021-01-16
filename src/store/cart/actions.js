export const addItemAction = (product) => {
    return ({ type: 'CART__ADD_PRODUCT', payload: product })
}

export const substractItemAction = (product) => {
    return ({ type: 'CART__SUBSTRACT_PRODUCT', payload: product })
}

export const removeItemAction = (product) => {
    return ({ type: 'CART__REMOVE_PRODUCT', payload: product })
}