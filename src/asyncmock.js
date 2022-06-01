const products = [
    {
        id: '1',
        nombre: 'Trucker Burger XL',
        precio: 1000,
        img: '/images/foto1.jpg',
        stock: 30,
        descripcion: '1 carne de 260grs de Roastbeef con el punto de cocción perfecto, acompañado por una salsa de mostaza y miel, lechuga, cebolla... un Manjar!'

    },
    {
        id: '2',
        nombre: 'Longer Burger',
        precio: 1000,
        img: '/images/foto2.jpg' ,
        stock: 30,
        descripcion: 'Burger completa'

    },
    {
        id: '3',
        nombre: 'Gibson Burger',
        precio: 1000,
        img:'/images/foto3.jpg',
        stock: 30,
        descripcion: 'Burger completa'

    },
    {
        id: '4',
        nombre: 'Burger4',
        precio: 1000,
        img: '/images/foto4.jpg' ,
        stock: 30,
        descripcion: 'Burger completa'

    },
    {
        id: '5',
        nombre: 'Burger5',
        precio: 1000,
        img: '/images/foto5.jpg',
        stock: 30,
        descripcion: 'Burger completa'

    },
    {
        id: '6',
        nombre: 'Burger6',
        precio: 1000,
        img: '/images/foto1.jpg',
        stock: 30,
        descripcion: 'Burger completa'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}