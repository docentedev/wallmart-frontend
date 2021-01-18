import { getByIdSelector } from '../selectors'

describe('cart selectors test', () => {
    it('call getByIdSelector selector', () => {
        const item = getByIdSelector(12)({ cart: { items: [{ id: 12 }] } })
        expect(item).toStrictEqual({ id: 12 })
    })
})