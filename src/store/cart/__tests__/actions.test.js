
import { addItemAction, substractItemAction, removeItemAction } from '../actions'
import {
    product,
} from '../../../mock-data'

describe('Actions cart test', () => {
    it('should call addItemAction without error', () => {
        const result = addItemAction(product)
        expect(result).toStrictEqual({ 'payload': product, 'type': 'CART__ADD_PRODUCT' })
    })

    it('should call substractItemAction without error', () => {
        const result = substractItemAction(product)
        expect(result).toStrictEqual({ 'payload': product, 'type': 'CART__SUBSTRACT_PRODUCT' })
    })

    it('should call removeItemAction without error', () => {
        const result = removeItemAction(product)
        expect(result).toStrictEqual({ 'payload': product, 'type': 'CART__REMOVE_PRODUCT' })
    })
})