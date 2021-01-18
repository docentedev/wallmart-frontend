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
    it('should call messageDiscountNok', () => {
        const message = messageDiscountNok(items)
        expect(message[0].discount).toBe(8700)
    })

    it('should call messageDiscountOk', () => {
        const message = messageDiscountOk(items)
        expect(message[0].discount).toBe(26000)
    })

    it('should call calcTotal', () => {
        const message = calcTotal(cartItems)
        expect(message).toBe(120000)
    })

    it('should call currencyFormat', () => {
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

    it('should call compare A', () => {
        const message = compare({ discount: 1 }, { discount: 0 })
        expect(message).toBe(1)
    })

    it('should call compare B', () => {
        const message = compare({ discount: 0 }, { discount: 1 })
        expect(message).toBe(-1)
    })

    it('should call compare C', () => {
        const message = compare({ discount: 1 }, { discount: 1 })
        expect(message).toBe(0)
    })
})