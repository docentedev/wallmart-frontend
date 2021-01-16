export const getByIdSelector = (id) => state => {
    return state.cart.items.find(item => item.id === id)
}