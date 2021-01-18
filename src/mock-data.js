export const items = {
    "Marca2": {
        "missingForDiscount": 25000,
        "hasDiscount": true,
        "discountApplied": false,
        "total": 65000,
        "discount": 5000,
        "threshold": 90000,
        "totalWithDiscount": 65000
    },
    "Marca6": {
        "missingForDiscount": 0,
        "hasDiscount": true,
        "discountApplied": true,
        "total": 360000,
        "discount": 26000,
        "threshold": 250000,
        "totalWithDiscount": 334000
    },
    "Marca4": {
        "missingForDiscount": 80000,
        "hasDiscount": true,
        "discountApplied": false,
        "total": 30000,
        "discount": 8700,
        "threshold": 110000,
        "totalWithDiscount": 30000
    }
}

export const cartItems = [
    {
        "_id": "6000e5dbdd32961e14a96896",
        "id": 17,
        "brand": "Marca6",
        "description": "Parlante Bluetooth LoudTeeth 1000",
        "image": "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
        "price": 90000,
        "__quantity": 1
    },
    {
        "_id": "6000e5dbdd32961e14a9688a",
        "id": 5,
        "brand": "Marca2",
        "description": "Cargador Smart Phone USB",
        "image": "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
        "price": 15000,
        "__quantity": 2
    }
]

export const cartItemsADiscount = [{ discount: 26000, text: 'A' }, { discount: 8700 }]
export const cartItemsBDiscount = [{ discount: 12000, text: 'B' }, { discount: 5000 }]
