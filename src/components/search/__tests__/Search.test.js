import React from 'react'
import TestRenderer from 'react-test-renderer'

import Search from '../Search'

const props = { value: '', onChange: () => { objSpy.onChangeActionFunctionMock() } }

describe('Search test', () => {
    it('should render Search component', () => {
        const testRenderer = TestRenderer.create(<Search {...props} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByType('input').length).toEqual(1)
    })
})
