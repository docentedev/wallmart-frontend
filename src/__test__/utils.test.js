import {
    messageDiscountNok,
    messageDiscountOk,
    calcTotal,
    currencyFormat,
    showDiscountNok,
    compare,
} from '../utils'
import {
    items,
    cartItems,
    cartItemsADiscount,
    cartItemsBDiscount,
} from '../mock-data'

describe('Utils test', () => {
    it('messageDiscountNok', () => {
        const message = messageDiscountNok(items)
        expect(message[0].discount).toBe(8700)
    })

    it('messageDiscountOk', () => {
        const message = messageDiscountOk(items)
        expect(message[0].discount).toBe(26000)
    })

    it('calcTotal', () => {
        const message = calcTotal(cartItems)
        expect(message).toBe(120000)
    })

    it('currencyFormat', () => {
        const message = currencyFormat(121312313542399)
        expect(message).toBe('$121.312.313.542.399')
    })

    it('should \'\' when call showDiscountNok', () => {
        const message = showDiscountNok(cartItemsADiscount, cartItemsBDiscount)
        expect(message).toBe('')
    })

    it('should A when call showDiscountNok', () => {
        const message = showDiscountNok(cartItemsBDiscount, cartItemsADiscount)
        expect(message).toBe('A')
    })

    it('compare A', () => {
        const message = compare({ discount: 1 }, { discount: 0})
        expect(message).toBe(1)
    })

    it('compare B', () => {
        const message = compare({ discount: 0 }, { discount: 1})
        expect(message).toBe(-1)
    })

    it('compare C', () => {
        const message = compare({ discount: 1 }, { discount: 1})
        expect(message).toBe(0)
    })
})