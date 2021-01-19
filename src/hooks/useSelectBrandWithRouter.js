import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import useDiscounts from './useDiscounts'

const useSelectBrandWithRouter = (onSelect) => {
    const history = useHistory()
    const location = useLocation()
    const { discounts } = useDiscounts()
    const wrapperHandlerClick = (brand) => () => {
        history.push(`?brand=${brand}`)
        onSelect(brand)
    }

    React.useEffect(() => {
        if (location.search) {
            const searchParams = new URLSearchParams(location.search)
            const brand = searchParams.get('brand')
            const selected = discounts.find(discount => discount.brand === brand)
            if (selected) onSelect(selected.brand)
            else if (brand === 'all') onSelect('all')
            else history.push(`?brand=all`)
        }
    }, [location, discounts, history, onSelect])

    return { wrapperHandlerClick, discounts }
}

export default useSelectBrandWithRouter