import { renderHook } from '@testing-library/react-hooks'
import useFetchDiscounts from '../useFetchDiscounts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('useFetchDiscounts', () => {
  it('useFetchDiscounts test', () => {
    const { result } = renderHook(() => useFetchDiscounts())
    expect(typeof result.current).toBe('object')
  })
})