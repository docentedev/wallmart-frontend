import { renderHook } from '@testing-library/react-hooks'
import useCart from '../useCart';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('useCart', () => {
  it('useCart test', () => {
    const { result } = renderHook(() => useCart())
    expect(typeof result.current).toBe('object')
  })
})