import React from 'react'
import TestRenderer from 'react-test-renderer'

import Cart from '../Cart'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

jest.mock('../../../hooks/useCart', () => ({
    __esModule: true,
    default: () => ({
        get: (id) => id === 5 ? ({ __quantity: 2 }) : false,
        addItem: () => { },
        substractItem: () => { },
        cartItemsByBrand: {
            calcTotalByBrand: [],
        },
        cartItems: [],
    }),
}))

describe('Cart Test', () => {
    it('should render Cart without error', () => {
        const testRenderer = TestRenderer.create(<Cart />)
        // const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
    })
})
