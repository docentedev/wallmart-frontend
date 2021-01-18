import { renderHook } from '@testing-library/react-hooks'
import useDiscounts from '../useDiscounts';

import {
  itemsByBrand,
} from '../../mock-data'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => ([
    {
      brand: 'Marca6',
      discount: 5000,
      threshold: 100,
    }
  ]),
  useDispatch: jest.fn()
}))

describe('useDiscounts test', () => {
  it('should call hook without error', () => {
    const { result, } = renderHook(() => useDiscounts())
    expect(typeof result.current).toBe('object')
    expect(result.current.applyDiscounts(itemsByBrand)).toStrictEqual({
      discounts: {
        Marca2: {
          discount: 0,
          discountApplied: false,
          hasDiscount: false,
          missingForDiscount: 0,
          threshold: 0,
          total: 15000,
          totalWithDiscount: 15000,
        },
        Marca6: {
          discount: 5000,
          discountApplied: true,
          hasDiscount: true,
          missingForDiscount: 0,
          threshold: 100,
          total: 90000,
          totalWithDiscount
            : 85000,
        },
      },
      total: 100000,
    })
  })
})