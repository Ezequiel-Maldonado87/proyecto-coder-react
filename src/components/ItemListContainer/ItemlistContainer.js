import {useState, useEffect} from 'react'
import { getProducts } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            {/*products.map(product => <p key={product.id}> {product.nombre}</p>)*/}
            <ItemList products={products}/>
        </div>
    )
    
}

export default ItemListContainer