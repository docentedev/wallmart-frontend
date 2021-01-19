import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import Product from '../Product'

const objSpy = {
    addActionMock: () => { },
    substractActionMock: () => { },
}

jest.mock('../../../hooks/useCart', () => ({
    __esModule: true,
    default: () => ({
        get: (id) => id === 5 ? ({ __quantity: 2 }) : false,
        addItem: () => {
            objSpy.addActionMock()
        },
        substractItem: () => {
            objSpy.substractActionMock()
        },
    }),
}))

jest.mock('react-feather', () => ({
    __esModule: true,
    Plus: () => (<div className="plus-icon">+</div>),
    Minus: () => (<div className="minus-icon">-</div>),
}))

let container

const product = {
    brand: 'Marca2',
    description: 'Cargador Smart Phone USB',
    id: 5,
    image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 15000,
    _id: '6000e5dbdd32961e14a9688a',
}

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

describe('Product test', () => {
    it('should Product render without error', () => {
        const testRenderer = TestRenderer.create(<Product product={product} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findByProps({ className: 'plus-icon' }).children).toEqual(['+'])
        expect(testInstance.findByProps({ className: 'minus-icon' }).children).toEqual(['-'])
    })

    it('should call addItem and subsctract functions when the product is in the cart', () => {
        const callAddFunctionSpy = jest.spyOn(objSpy, 'addActionMock')
        const callSubstractcFunctionSpy = jest.spyOn(objSpy, 'substractActionMock')

        act(() => {
            ReactDOM.render(<Product product={product} />, container)
        });
        const buttonAdd = container.querySelector('.add-button')
        const buttonSubstract = container.querySelector('.substract-button')

        act(() => {
            buttonAdd.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(callAddFunctionSpy).toBeCalled()

        act(() => {
            buttonSubstract.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(callSubstractcFunctionSpy).toBeCalled()
    })

    it('should call addItem function when the product is not in the cart', () => {
        product.id = 6
        const callAddFunctionSpy = jest.spyOn(objSpy, 'addActionMock')

        act(() => {
            ReactDOM.render(<Product product={product} />, container)
        });
        const buttonAdd = container.querySelector('button')

        act(() => {
            buttonAdd.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(callAddFunctionSpy).toBeCalled()
    })
})
