import React from 'react'
import styles from './Home.module.css'
import Product from '../../components/product/Product'

function Home({ addItem, getItem, substractItem }) {
    const [products, setProducts] = React.useState([])
    const [discounts, setDiscounts] = React.useState([])

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/products`)
            .then(response => response.json())
            .then(data => setProducts(data.data))
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/discounts`)
            .then(response => response.json())
            .then(data => setDiscounts(data.data))
    }, [])

    return (
        <div>
            <section className={styles.area_products}>
                {products.length > 0 ? products.map((e, i) => (
                    <Product substractItem={substractItem} cartItem={getItem(e.id)} key={i} onAdd={addItem} product={e} />
                )) : (
                        <div>Loading...</div>
                    )}
            </section>
            {discounts.length}
        </div>
    );
}

export default Home;
