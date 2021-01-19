import React from 'react'
import TestRenderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import Search from '../Search'

const objSpy = {
    onChangeActionFunctionMock: () => { },
}

const props = { value: '', onChange: () => { objSpy.onChangeActionFunctionMock() } }

const setup = () => {
    const utils = render(<Search {...props} />)
    const input = utils.getByLabelText('search-input')
    return {
      input,
      ...utils,
    }
  }

describe('Search test', () => {
    it('should render Search component', () => {
        const testRenderer = TestRenderer.create(<Search {...props} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('input').length).toEqual(1)
    })

    test('should call spy change function when input is change', () => {
        const { input } = setup()
        const changeSpu = jest.spyOn(objSpy, 'onChangeActionFunctionMock')
        fireEvent.change(input, { target: { value: '23' } })
        expect(changeSpu).toBeCalled()
      })
})
