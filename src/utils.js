function compare(a, b) {
    if (a.discount < b.discount) {
        return -1;
    }
    if (a.discount > b.discount) {
        return 1;
    }
    return 0;
}

export const messageDiscountNok = (items) => {
    if (!items) return []
    const itemsMessage = []
    Object.keys(items).forEach((key, i) => {
        const item = items[key]
        if (!item.discountApplied) {
            const missingForDiscount = `Agrega ${currencyFormat(item.missingForDiscount)}`
            const discount = `un descuento total de ${currencyFormat(item.discount)} en tu compra!`
            itemsMessage.push({
                text: `${missingForDiscount} más en productos ${key} y aprovecha ${discount}`,
                discount: item.discount
            })
        }
    })

    return itemsMessage.sort(compare).reverse()
}

export const messageDiscountOk = (items) => {
    if (!items) return []
    const message = []
    Object.keys(items).forEach((key) => {
        const item = items[key]
        if (item.discountApplied) {
            const total = `comprado ${currencyFormat(item.threshold)} de productos`
            const discount = `un descuento de ${currencyFormat(item.discount)}`
            message.push({
                text: `Se aplicó ${discount} por haber ${total} ${key}!.`,
                discount: item.discount,
            })
        }
    })
    return message.sort(compare).reverse()
}

export const calcTotal = (cartItems) => {
    return cartItems.reduce((prev, curr) => prev + (curr.price * curr.__quantity), 0)
}

export function currencyFormat(x) {
    return `$${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}
