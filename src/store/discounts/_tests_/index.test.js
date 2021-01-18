import reducer from '../index'

describe('discounts reducer test', () => {
    it('call DISCOUNTS_SET type', () => {
        const store = reducer({ items: [] }, { type: 'DISCOUNTS_SET', payload: [{}] })
        expect(store).toStrictEqual({ items: [{}] })
    })

    it('call OTHER type', () => {
        const store = reducer({ items: [] }, { type: 'DISCOUNTS_SET_OTHER', payload: [{}] })
        expect(store).toStrictEqual({ items: [] })
    })
})