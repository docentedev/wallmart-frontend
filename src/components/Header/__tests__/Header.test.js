import React from 'react'
import TestRenderer from 'react-test-renderer'

import Header from '../Header'

jest.mock('react-router-dom', () => ({
    __esModule: true,
    Link: () => (<div className="link">Link</div>),
}))

describe('Test Header', () => {
    it('Header', () => {
        const testRenderer = TestRenderer.create(<Header />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findAllByProps({ className: 'link'})[2].children).toEqual(['Link'])
    })
})
