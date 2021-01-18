import reducer from '../index'

const initialState = {
    items: [],
    itemsByBrand: {
        items: [],
        calcTotalByBrand: 0,
    }
}

describe('Store test', () => {
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
        expect(data).toStrictEqual({
            'items': [{
                '__quantity': 1,
                'brand': 'Marca2',
                'description':
                    'Foo',
                'id': 12,
                'price': 12000,
            }],
            'itemsByBrand': {
                'calcTotalByBrand': {
                    'Marca2': {
                        'discountApplied': false,
                        'hasDiscount': false,
                        'missingForDiscount': null,
                        'total': 12000,
                    },
                },
                'items': {
                    'Marca2': [{
                        '__quantity': 1,
                        'brand': 'Marca2',
                        'description': 'Foo',
                        'id': 12,
                        'price': 12000,
                    }],
                },
            },
        })
    })
})