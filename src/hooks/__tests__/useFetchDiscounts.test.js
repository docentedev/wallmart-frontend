import { renderHook } from '@testing-library/react-hooks'
import useFetchDiscounts from '../useFetchDiscounts'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => () => { },
}))

describe('useFetchDiscounts test', () => {
  it('should call hook without error', () => {
    const { result } = renderHook(() => useFetchDiscounts())
    expect(typeof result.current).toBe('object')
  })
})