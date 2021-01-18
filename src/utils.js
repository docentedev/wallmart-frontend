export const showDiscountNok = (ok, nok) => {
    if (nok.length > 0 && nok[0].discount > (ok.length > 0 ? ok[0].discount : 0))
        return nok[0].text
    return ''
}

export const compare = (a, b) => {
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
            const missingForDiscount = (<span>Agrega <strong>{currencyFormat(item.missingForDiscount)}</strong></span>)
            const discount = (<span>un descuento total de <strong>{currencyFormat(item.discount)}</strong> en tu compra!</span>)
            itemsMessage.push({
                text: (<p>{missingForDiscount} más en productos {key} y aprovecha {discount}</p>),
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
            const total = (<span>comprado <strong>{currencyFormat(item.threshold)}</strong> de productos</span>)
            const discount = (<span>un descuento de <strong>{currencyFormat(item.discount)}</strong></span>)
            message.push({
                text: (<p>* Se aplicó {discount} por haber {total} {key}!.</p>),
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
