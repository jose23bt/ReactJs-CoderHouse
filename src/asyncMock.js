
const products = [
    {
        id:'1',
        name: 'Chocolate',
        category: 'dulces',
        img: 'https://s40123.pcdn.co/wp-content/uploads/sites/3/2020/12/Hersheys.jpg.optimal.jpg',
        price: 200,
        stock: 25,
        description:'barra de chocolate 180g'
    },
    {
        id:'2',
        name: 'CocaCola',
        category: 'bebidas',
        img: 'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80',
        price: 400,
        stock: 25,
        description:'Cocacola Clasica 200cc'
    },
    {
        id:'3',
        name: 'Papas Lays',
        category: 'snacks',
        img: 'https://st3.depositphotos.com/1063437/17194/i/450/depositphotos_171945060-stock-photo-packets-of-lays-potato-chips.jpg',
        price: 500,
        stock: 25,
        description:'papas lays 80g'
    },
    {
        id:'4',
        name: 'RedBull',
        category: 'bebidas',
        img: 'https://st2.depositphotos.com/1407534/42360/i/450/depositphotos_423607300-stock-photo-sankt-petersburg-russia-september-09.jpg',
        price: 500,
        stock: 25,
        description:'bebida energetica 200cc'
    },
    {
        id:'5',
        name: 'Fanta',
        category: 'bebidas',
        img: 'https://c0.wallpaperflare.com/preview/795/164/862/beverage-blur-can-canister.jpg',
        price: 400,
        stock: 25,
        description:'gaseosa de 200cc'
    },
    {
        id:'6',
        name: 'Chocolate 60%',
        category: 'dulces',
        img: 'https://superchanguito.com.ar/wp-content/uploads/2021/09/Diseno-sin-titulo-2021-09-08T123459.378.png',
        price: 500,
        stock: 25,
        description:'barra de chocolate oscuro 180g'
    },
    {
        id:'7',
        name: 'MiniTorta dark',
        category: 'dulces',
        img: 'https://catadordealfajores.com/wp-content/uploads/2022/09/2-1.jpg',
        price: 500,
        stock: 25,
        description:'Minitorta con chocolate oscuro'
    },
    {
        id:'8',
        name: 'Doritos',
        category: 'snacks',
        img: 'https://gray-kcrg-prod.cdn.arcpublishing.com/resizer/glAf9tbzTRDhkD5UyfUnawKI81I=/1200x800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CO7PVZWD6RD7ZHI2LOCPEK3EGA.png',
        price: 800,
        stock: 25,
        description:'Nachos cheese 80g'
    },
    {
        id:'9',
        name: 'Cheetos',
        category: 'snacks',
        img: 'https://www.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/08/cheetos-were-invented-1948-fritos-founder-charles-elmer-doolin-dallas-texas-2020097.jpg',
        price: 800,
        stock: 25,
        description:'Cheetos Crunchy 80g'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },200)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const filteredProducts = products.filter(product => product.category === category);
        if (filteredProducts.length > 0) {
            resolve(filteredProducts);
        } else {
            reject("No se encontraron productos en esta categoría.");
        }
    });
};