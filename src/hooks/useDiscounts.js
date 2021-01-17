import { useSelector } from 'react-redux'

const useFetchDiscounts = () => {
    const discounts = useSelector(state => state.discounts.items)
    const applyDiscounts = (itemsByBrand) => {
        let totalCalcWithDiscount = 0
        const ibb = itemsByBrand.calcTotalByBrand
        if (ibb) {
            Object.keys(ibb).forEach((key) => {
                const discount = discounts.find(discount => discount.brand === key)
                const itemDiscount = ibb[key]
                const discountApplied = itemDiscount.total >= discount.threshold
                if (discount) {
                    ibb[key] = {
                        ...itemDiscount,
                        hasDiscount: true,
                        discount: discount.discount,
                        threshold: discount.threshold,
                        missingForDiscount: discountApplied ? 0 : discount.threshold - itemDiscount.total,
                        discountApplied: discountApplied,
                        totalWithDiscount: discountApplied ? itemDiscount.total - discount.discount : itemDiscount.total,
                    }
                }
            })

            Object.keys(ibb).forEach((key) => {
                totalCalcWithDiscount += ibb[key].totalWithDiscount
            })
        }

        return {
            discounts: ibb,
            total: totalCalcWithDiscount,
        }
    }
    return { discounts, applyDiscounts }
}

export default useFetchDiscounts
