import store from '../index'

describe('Store test', () => {
    it('call store date', () => {
        const data = store.getState()
        expect(data).toStrictEqual({
            'cart': {
                'items': [],
                'itemsByBrand': { 'calcTotalByBrand': 0, 'items': [] }
            },
            'discounts': { 'items': null },
        })
    })
})