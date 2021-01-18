import { renderHook } from '@testing-library/react-hooks'
import useDiscounts from '../useDiscounts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('useDiscounts', () => {
  it('useDiscounts test', () => {
    const { result } = renderHook(() => useDiscounts())
    expect(typeof result.current).toBe('object')
  })
})