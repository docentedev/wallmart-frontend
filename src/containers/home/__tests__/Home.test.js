import React from 'react'
import TestRenderer from 'react-test-renderer'

import Home from '../Home'

jest.mock('../../../components/product/Product', () => ({
    __esModule: true,
    default: () => (<div className="product">Product</div>),
}))

jest.mock('../../../hooks/useFetchProducts', () => ({
    __esModule: true,
    default: () => ({ items: [{}] }),
}))

describe('Home Test', () => {
    it('should render Home without error', () => {
        const testRenderer = TestRenderer.create(<Home />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findByProps({ className: 'product' }).children).toEqual(['Product'])
    })
})
