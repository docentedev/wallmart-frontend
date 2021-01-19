import React from 'react'
import TestRenderer from 'react-test-renderer'

import BrandFilter from '../BrandFilter'

jest.mock('../../../hooks/useSelectBrandWithRouter', () => ({
    __esModule: true,
    default: () => ({
        discounts: [
            { discount: 2000 },
            { discount: 1000 },
        ],
        wrapperHandlerClick: () => () => { },
    }),
}))

describe('BrandFilter test', () => {
    it('should render BrandFilter component', () => {
        const testRenderer = TestRenderer.create(<BrandFilter />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('button').length).toEqual(3)
    })
})
