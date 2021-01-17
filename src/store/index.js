import { createStore, combineReducers } from 'redux'
import cartReducer from './cart'
import discountsReducer from './discounts'

const rootReducer = combineReducers({
    cart: cartReducer,
    discounts: discountsReducer,
})

const store = createStore(rootReducer)

export default store