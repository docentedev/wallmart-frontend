import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'

import CartItem from '../CartItem'

import { product } from '../../../mock-data'

const objSpy = {
    addActionMock: () => { },
    substractActionMock: () => { },
    removeActionMock: () => { },
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
        removeItem: () => {
            objSpy.removeActionMock()
        },
    }),
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

let container

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

describe('CartItem Test', () => {
    it('should render CartItem without error', () => {

        const testRenderer = TestRenderer.create(<CartItem product={product} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('img').length).toEqual(1)
    })

    it('should call addItem and subsctract functions when the product is in the cart', () => {
        const callAddFunctionSpy = jest.spyOn(objSpy, 'addActionMock')
        const callSubstractcFunctionSpy = jest.spyOn(objSpy, 'substractActionMock')

        act(() => {
            ReactDOM.render(<CartItem product={product} />, container)
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

    it('should call remove function when the clicked into remove button', () => {
        product.id = 6
        const callRemoveFunctionSpy = jest.spyOn(objSpy, 'removeActionMock')

        act(() => {
            ReactDOM.render(<CartItem product={product} />, container)
        });
        const buttonRemove = container.querySelector('button.remove-button')

        act(() => {
            buttonRemove.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        expect(callRemoveFunctionSpy).toBeCalled()
    })
})
