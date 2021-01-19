import React from 'react'
import TestRenderer from 'react-test-renderer'
import { product } from '../../../mock-data'
import Home, {
    filterProductByDescription,
    filterProductByDiscount,
} from '../Home'

jest.mock('../../../components/brand-filter/BrandFilter', () => ({
    __esModule: true,
    default: () => (<div className="brand-filter">BrandFilter</div>),
}))

jest.mock('../../../components/search/Search', () => ({
    __esModule: true,
    default: () => (<div className="search">Search</div>),
}))

jest.mock('../../../components/product/Product', () => ({
    __esModule: true,
    default: () => (<div className="product">Product</div>),
}))

describe('Home Test', () => {
    it('should render Home without error', () => {
        const testRenderer = TestRenderer.create(<Home products={[product]} />)
        const testInstance = testRenderer.root

        expect(testRenderer.toJSON()).toMatchSnapshot()
        expect(testInstance.findByProps({ className: 'product' }).children).toEqual(['Product'])
    })

    it('should call filterProductByDescription and return 1 product when filter is <lante>', () => {
        const result = filterProductByDescription([product], 'lante')
        expect(result).toStrictEqual([product])
    })

    it('should call filterProductByDiscount and return 1 product when filter is <Marca6>', () => {
        const result = filterProductByDiscount([product], 'Marca6')
        expect(result).toStrictEqual([product])
    })
})
