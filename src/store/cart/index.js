import { addItem, substractItem, removeItem, groupByBrand } from './utils'

const initialState = {
    items: [],
    itemsByBrand: {
        items: [],
        calcTotalByBrand: 0,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CART__ADD_PRODUCT':
            const itemsAdd = addItem(state.items, action.payload)
            return {
                ...state,
                itemsByBrand: groupByBrand(itemsAdd),
                items: itemsAdd,
            }
        case 'CART__SUBSTRACT_PRODUCT':
            const itemsSubsctract = substractItem(state.items, action.payload)
            return {
                ...state,
                itemsByBrand: groupByBrand(itemsSubsctract),
                items: itemsSubsctract,
            }
        case 'CART__REMOVE_PRODUCT':
            const itemsRemove = removeItem(state.items, action.payload)
            return {
                ...state,
                itemsByBrand: groupByBrand(itemsRemove),
                items: itemsRemove,
            }
        default:
            return state
    }
}

export default reducer