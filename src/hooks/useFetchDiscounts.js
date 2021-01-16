import React from 'react'

const useFetchDiscounts = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/discounts`)
            .then(response => response.json())
            .then(data => setItems(data.data))
    }, [])

    return { items }
}

export default useFetchDiscounts
