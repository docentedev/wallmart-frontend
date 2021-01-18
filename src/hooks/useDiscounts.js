import { useSelector } from 'react-redux'

const useDiscounts = () => {
    const discounts = useSelector(state => state.discounts.items)
    const applyDiscounts = (itemsByBrand) => {
        let totalCalcWithDiscount = 0
        const ibb = itemsByBrand.calcTotalByBrand
        const out = {}
        if (ibb) {
            Object.keys(ibb).forEach((key) => {
                if (key) {
                    const itemDiscount = ibb[key]
                    const discount = discounts.find(discount => discount.brand === key)
                    if (discount) {
                        const discountApplied = itemDiscount.total >= discount.threshold
                        out[key] = {
                            ...itemDiscount,
                            hasDiscount: true,
                            discount: discount.discount,
                            threshold: discount.threshold,
                            missingForDiscount: discountApplied ? 0 : discount.threshold - itemDiscount.total,
                            discountApplied: discountApplied,
                            totalWithDiscount: discountApplied ? itemDiscount.total - discount.discount : itemDiscount.total,
                        }
                    } else {
                        out[key] = {
                            ...itemDiscount,
                            hasDiscount: false,
                            discount: 0,
                            threshold: 0,
                            missingForDiscount: 0,
                            discountApplied: false,
                            totalWithDiscount: itemDiscount.total,
                        }
                    }
                }
            })

            Object.keys(out).forEach((key) => {
                totalCalcWithDiscount += out[key].totalWithDiscount
            })
        }

        return {
            discounts: out,
            total: totalCalcWithDiscount,
        }
    }
    return { discounts, applyDiscounts }
}

export default useDiscounts
