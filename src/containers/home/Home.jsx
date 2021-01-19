import React from 'react'
import {
    Loader,
} from 'react-feather'
import styles from './Home.module.css'
import Product from '../../components/product/Product'
import BrandFilter from '../../components/brand-filter/BrandFilter'
import Search from '../../components/search/Search'

export const filterProductByDiscount = (products, brand) => {
    if (!brand || brand === 'all') return products
    return products.filter(product => product.brand === brand)
}

export const filterProductByDescription = (products, description) => {
    if (description === '') return products
    return products.filter(product => product.description.toUpperCase().indexOf(description.toUpperCase().trim()) !== -1)
}

function Home({ products }) {
    const [descriptionFilter, setDescriptionFilter] = React.useState('')
    const [discountActive, setDiscountActive] = React.useState()

    const filterProducts = filterProductByDescription(filterProductByDiscount(products, discountActive), descriptionFilter)
    return (
        <div>
            <Search value={descriptionFilter} onChange={setDescriptionFilter} />
            <div className={styles.home_container}>

                <div className={styles.home_container__brand_filter}>
                    <BrandFilter discountActive={discountActive} onSelect={setDiscountActive} />
                </div>
                <section className={styles.area_products}>
                    {products.length > 0 ? (filterProducts.length > 0 ? filterProducts.map((e, i) => (
                        <Product key={i} product={e} />
                    )) : (<div className={styles.home_container__product_not_found}>No se encontraron productos</div>)) : (
                            <Loader className="rotating" size={40} />
                        )}
                </section>
            </div>
        </div>
    );
}

export default Home
