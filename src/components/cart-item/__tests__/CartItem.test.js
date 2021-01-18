import React from 'react'
import TestRenderer from 'react-test-renderer'

import CartItem from '../CartItem'

describe('CartItem Test', () => {
    it('should call CartItem', () => {
        const product = {
            brand: 'Marca2',
            description: 'Cargador Smart Phone USB',
            id: 5,
            image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 15000,
            _id: '6000e5dbdd32961e14a9688a',
        }

        const testRenderer = TestRenderer.create(<CartItem product={product} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('img').length).toEqual(1)
    })
})
