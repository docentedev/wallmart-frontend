import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useFetchDiscounts = () => {
    const discounts = useSelector(state => state.discounts.items)

    const dispatch = useDispatch()

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/discounts`)
            .then(response => response.json())
            .then(data => dispatch({
                type: 'DISCOUNTS_SET',
                payload: data.data,
            }))
    }, [dispatch])

    return { discounts }
}

export default useFetchDiscounts
