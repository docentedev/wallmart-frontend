import React from 'react'

const useFetchProducts = () => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/products`)
            .then(response => response.json())
            .then(data => setItems(data.data))
    }, [])

    return { items }
}

export default useFetchProducts
