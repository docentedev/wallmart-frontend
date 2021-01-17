const initialState = {
    items: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISCOUNTS_SET':
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state
    }
}

export default reducer