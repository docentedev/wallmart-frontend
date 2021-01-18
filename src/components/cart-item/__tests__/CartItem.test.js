import React from 'react'
import TestRenderer from 'react-test-renderer'

import CartItem from '../CartItem'

import { product } from '../../../mock-data'

describe('CartItem Test', () => {
    it('should render CartItem without error', () => {

        const testRenderer = TestRenderer.create(<CartItem product={product} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('img').length).toEqual(1)
    })
})
