import React from 'react'
import TestRenderer from 'react-test-renderer'

import App from '../App'

jest.mock('../hooks/useFetchProducts', () => ({
    __esModule: true,
    default: () => ({ items: [{}] }),
}))

jest.mock('../hooks/useFetchDiscounts', () => ({
    __esModule: true,
    default: () => ({ discounts: [{}] }),
}))

jest.mock('../Router', () => ({
    __esModule: true,
    default: () => (<div className="router">Router</div>),
}))

describe('App test', () => {
    it('should render App component', () => {
        const testRenderer = TestRenderer.create(<App />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findByProps({ className: 'router' }).children).toEqual(['Router'])
    })
})
