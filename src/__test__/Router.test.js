import React from 'react'
import TestRenderer from 'react-test-renderer'

import Router from '../Router'

describe('Router test', () => {
    it('should render Router component without error', () => {
        const testRenderer = TestRenderer.create(<Router />)
        expect(testRenderer.toJSON()).toMatchSnapshot()
    })
})
