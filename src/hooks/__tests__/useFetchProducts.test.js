import { renderHook } from '@testing-library/react-hooks'
import useFetchProducts from '../useFetchProducts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('useFetchProducts test', () => {
  it('should call hook without error', () => {
    const { result } = renderHook(() => useFetchProducts())
    expect(typeof result.current).toBe('object')
  })
})