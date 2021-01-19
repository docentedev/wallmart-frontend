import { calcTotal } from "../../utils";

export const groupByBrand = function (array) {
    const items = array.reduce((rv, x) => {
        (rv[x.brand] = rv[x.brand] || []).push(x)
        return rv
    }, {})

    const calcTotalByBrand = {}

    Object.keys(items).forEach((key) => {
        calcTotalByBrand[key] = {
            missingForDiscount: null,
            hasDiscount: false,
            discountApplied: false,
            total: calcTotal(items[key]),
        }
    })

    return {
        items,
        calcTotalByBrand,
    }
};

export const removeItem = (cartItems, product) => {
    let prevItems = cartItems
    const itemExist = prevItems.find(i => i.id === product.id)
    if (itemExist) {
        return cartItems.filter(ci => ci.id !== product.id)
    }
    return cartItems
}

export const substractItem = (cartItems, product) => {
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
    return cartItems
}

export const addItem = (cartItems, product) => {
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