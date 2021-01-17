import React from 'react'
import styles from './Home.module.css'
import Product from '../../components/product/Product'
import useFetchProducts from '../../hooks/useFetchProducts'

function Home() {
    const { items: products } = useFetchProducts()

    return (
        <div>
            <section className={styles.area_products}>
                {products.length > 0 ? products.map((e, i) => (
                    <Product key={i} product={e} />
                )) : (
                        <div>Loading...</div>
                    )}
            </section>
        </div>
    );
}

export default Home;
