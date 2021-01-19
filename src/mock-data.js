export const substractDataResult = { "items": [], "itemsByBrand": { "calcTotalByBrand": {}, "items": {} } }
export const removeDataResult = { "items": [], "itemsByBrand": { "calcTotalByBrand": {}, "items": {} } }
export const addDataResult = {
    'items': [{
        '__quantity': 1,
        'brand': 'Marca2',
        'description':
            'Foo',
        'id': 12,
        'price': 12000,
    }],
    'itemsByBrand': {
        'calcTotalByBrand': {
            'Marca2': {
                'discountApplied': false,
                'hasDiscount': false,
                'missingForDiscount': null,
                'total': 12000,
            },
        },
        'items': {
            'Marca2': [{
                '__quantity': 1,
                'brand': 'Marca2',
                'description': 'Foo',
                'id': 12,
                'price': 12000,
            }],
        },
    },
}

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
export const itemsByBrand = {
    "items": {
        "Marca2": [
            {
                "_id": "6000e5dbdd32961e14a9688a",
                "id": 5,
                "brand": "Marca2",
                "description": "Cargador Smart Phone USB",
                "image": "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
                "price": 15000,
                "__quantity": 1
            }
        ],
        "Marca6": [
            {
                "_id": "6000e5dbdd32961e14a96896",
                "id": 17,
                "brand": "Marca6",
                "description": "Parlante Bluetooth LoudTeeth 1000",
                "image": "https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
                "price": 90000,
                "__quantity": 1
            }
        ]
    },
    "calcTotalByBrand": {
        "Marca2": {
            "missingForDiscount": null,
            "hasDiscount": false,
            "discountApplied": false,
            "total": 15000
        },
        "Marca6": {
            "missingForDiscount": null,
            "hasDiscount": false,
            "discountApplied": false,
            "total": 90000
        }
    }
}


export const cartItemsADiscount = [{ discount: 26000, text: 'A' }, { discount: 8700 }]
export const cartItemsBDiscount = [{ discount: 12000, text: 'B' }, { discount: 5000 }]

export const items2 = [
    {
        '_id': '6000e5dbdd32961e14a9688a',
        'id': 5,
        'brand': 'Marca2',
        'description': 'Cargador Smart Phone USB',
        'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        'price': 15000,
        '__quantity': 2
    },
    {
        '_id': '6000e5dbdd32961e14a96896',
        'id': 17,
        'brand': 'Marca6',
        'description': 'Parlante Bluetooth LoudTeeth 1000',
        'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        'price': 90000,
        '__quantity': 1
    },
    {
        '_id': '6000e5dbdd32961e14a96889',
        'id': 4,
        'brand': 'Marca2',
        'description': 'Refrigerador',
        'image': 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
        'price': 20000,
        '__quantity': 1
    }
]

export const product = {
    brand: 'Marca6',
    description: 'Parlante Bluetooth LoudTeeth 1000',
    id: 17,
    image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 90000,
    _id: '6000e5dbdd32961e14a96896',
}

export const product2 = {
    brand: 'Marca2',
    description: 'Parlante Bluetooth LoudTeeth 1000',
    id: 18,
    image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 90000,
    _id: '6000e5dbdd32961e14a96897',
}

export const productQuantity2 = {
    brand: 'Marca6',
    description: 'Parlante Bluetooth LoudTeeth 1000',
    id: 17,
    __quantity: 2,
    image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 90000,
    _id: '6000e5dbdd32961e14a96896',
}

export const productQuantity1 = {
    brand: 'Marca6',
    description: 'Parlante Bluetooth LoudTeeth 1000',
    id: 17,
    __quantity: 1,
    image: 'https://www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
    price: 90000,
    _id: '6000e5dbdd32961e14a96896',
}


export const voidCart = []
