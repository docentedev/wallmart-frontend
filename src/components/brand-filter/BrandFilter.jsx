import React from 'react'
import { Circle, CheckCircle } from 'react-feather'
import styles from './BrandFilter.module.css'
import useSelectBrandWithRouter from '../../hooks/useSelectBrandWithRouter'
import { compare, currencyFormat } from '../../utils'

const BrandFilter = ({ discountActive, onSelect }) => {
    const { wrapperHandlerClick, discounts } = useSelectBrandWithRouter(onSelect)
    return (
        <div className={styles.brand_filter}>
            <h3>Filtrar productos por descuento</h3>
            <div>
                <button
                    onClick={wrapperHandlerClick('all')}>
                    Sin filtro
                {!discountActive || discountActive === 'all' ? (<span>
                        <CheckCircle size={16} />
                    </span>) : (<span><Circle size={16} /></span>)}
                </button>
                {discounts.sort(compare).map((discount, i) => (
                    <button
                        data-active={discountActive === discount.brand ? 'active' : ''}
                        key={i}
                        onClick={wrapperHandlerClick(discount.brand)}>
                        {discount.brand}{' '}<br />{currencyFormat(discount.discount)} dcto
                        {discountActive === discount.brand ? (<span>
                            <CheckCircle size={16} />
                        </span>) : (<span><Circle size={16} /></span>)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BrandFilter
