import { renderHook } from '@testing-library/react-hooks'
import useSelectBrandWithRouter from '../useSelectBrandWithRouter';

jest.mock('react-router-dom', () => ({
    __esModule: true,
    useLocation: () => ({
        search: '?brand=Marca6',
    }),
    useHistory: () => ({
        push: () => {},
    }),
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

jest.mock('../useDiscounts', () => ({
    __esModule: true,
    default: () => ({ discounts: [], applyDiscounts: () => { } }),
}))

describe('useSelectBrandWithRouter test', () => {
    it('should call hook without error', () => {
        const { result } = renderHook(() => useSelectBrandWithRouter())
        expect(typeof result.current).toBe('object')
    })
})