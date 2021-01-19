import React from 'react'
import TestRenderer from 'react-test-renderer'
import { product } from '../mock-data'

import Router from '../Router'

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

jest.mock('../hooks/useSelectBrandWithRouter', () => ({
    __esModule: true,
    default: () => ({
        wrapperHandlerClick: () => { },
        discounts: [],
    }),
}))

jest.mock('../hooks/useCart', () => ({
    __esModule: true,
    default: () => ({
        get: (id) => id === 5 ? ({ __quantity: 2 }) : false,
        addItem: () => { },
        substractItem: () => { },
    }),
}))

describe('Router test', () => {
    it('should render Router component without error', () => {
        const testRenderer = TestRenderer.create(<Router products={[product]} />)
        expect(testRenderer.toJSON()).toMatchSnapshot()
    })
})
