import {
    voidCart,
    product,
    product2,
    items2,
    productQuantity2,
    productQuantity1,
} from '../../../mock-data'

import {
    addItem,
    groupByBrand,
    removeItem,
    substractItem,
} from '../utils'

describe('Utils Cart test', () => {
    it('should add addItem and cart should show a new item', () => {
        const cartWithProduct = addItem(voidCart, product)
        expect(cartWithProduct).toStrictEqual([{
            __quantity: 1,
            _id: '6000e5dbdd32961e14a96896',
            brand: 'Marca6',
            description: 'Parlante Bluetooth LoudTeeth 1000',
            id: 17,
            image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 90000,
        }])

        const cartWithProductExits = addItem([...cartWithProduct, product2], product)

        expect(cartWithProductExits[0]).toStrictEqual({
            __quantity: 2,
            _id: '6000e5dbdd32961e14a96896',
            brand: 'Marca6',
            description: 'Parlante Bluetooth LoudTeeth 1000',
            id: 17,
            image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 90000,
        })
    })

    it('should call groupByBrand without error', () => {
        const itemsGroups = groupByBrand(items2)
        expect(itemsGroups.items).toStrictEqual({ 'Marca2': [{ '__quantity': 2, '_id': '6000e5dbdd32961e14a9688a', 'brand': 'Marca2', 'description': 'Cargador Smart Phone USB', 'id': 5, 'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg', 'price': 15000 }, { '__quantity': 1, '_id': '6000e5dbdd32961e14a96889', 'brand': 'Marca2', 'description': 'Refrigerador', 'id': 4, 'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg', 'price': 20000 }], 'Marca6': [{ '__quantity': 1, '_id': '6000e5dbdd32961e14a96896', 'brand': 'Marca6', 'description': 'Parlante Bluetooth LoudTeeth 1000', 'id': 17, 'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg', 'price': 90000 }] })
        expect(itemsGroups.calcTotalByBrand).toStrictEqual({ 'Marca2': { 'discountApplied': false, 'hasDiscount': false, 'missingForDiscount': null, 'total': 50000 }, 'Marca6': { 'discountApplied': false, 'hasDiscount': false, 'missingForDiscount': null, 'total': 90000 } })
    })

    it('should call removeItem and retur a void array', () => {
        const cartWithoutProduct = removeItem([product], product)
        expect(cartWithoutProduct).toStrictEqual([])
    })

    it('should call removeItem and without finding Product', () => {
        const cartWithoutProduct = removeItem([product2], product)
        expect(cartWithoutProduct).toStrictEqual([product2])
    })

    it('should call substractItem and subsctrar 1 item', () => {
        const cartWithProduct = substractItem([productQuantity2], productQuantity2)
        expect(cartWithProduct).toStrictEqual([productQuantity1])
    })
})