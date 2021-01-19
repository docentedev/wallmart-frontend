import reducer from '../index'

import {
    addDataResult,
    removeDataResult,
    substractDataResult,
} from '../../../mock-data'

const initialState = {
    items: [],
    itemsByBrand: {
        items: [],
        calcTotalByBrand: 0,
    }
}

describe('Store Cart test', () => {
    it('call reducer default', () => {
        const data = reducer(initialState, { type: 'ANY_ACTION_TYPE', payload: {} })
        expect(data).toStrictEqual({
            items: [],
            itemsByBrand: {
                calcTotalByBrand: 0,
                items: [],
            },
        })
    })

    it('call reducer add item', () => {
        const data = reducer(initialState, {
            type: 'CART__ADD_PRODUCT',
            payload: { brand: 'Marca2', id: 12, description: 'Foo', price: 12000 }
        })
        expect(data).toStrictEqual(addDataResult)
    })

    it('call reducer remove item', () => {
        const data = reducer(initialState, {
            type: 'CART__REMOVE_PRODUCT',
            payload: { brand: 'Marca2', id: 12, description: 'Foo', price: 12000 }
        })
        expect(data).toStrictEqual(removeDataResult)
    })

    it('call reducer substract item', () => {
        const data = reducer(initialState, {
            type: 'CART__SUBSTRACT_PRODUCT',
            payload: { brand: 'Marca2', id: 12, description: 'Foo', price: 12000 }
        })
        expect(data).toStrictEqual(substractDataResult)
    })
})