export const calcTotal = (cartItems) => {
    return cartItems.reduce((prev, curr) => prev + (curr.price * curr.__quantity), 0)
}

export function currencyFormat(x) {
    return `$${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}