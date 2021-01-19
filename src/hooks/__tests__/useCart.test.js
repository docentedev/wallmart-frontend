import { renderHook } from '@testing-library/react-hooks'
import useCart from '../useCart'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('useCart test', () => {
  it('should call hook without error', () => {
    const { result } = renderHook(() => useCart())
    expect(typeof result.current).toBe('object')
  })
})