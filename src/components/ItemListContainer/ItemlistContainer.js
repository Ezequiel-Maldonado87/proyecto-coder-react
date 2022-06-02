import {useState, useEffect} from 'react'
import { getProducts } from "../../asyncmock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategoria } from '../../asyncmock'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState ([])

    const {categoriaId} = useParams()

    useEffect(() => {
        if(!categoriaId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else{
            getProductsByCategoria(categoriaId).then(response => {
                setProducts(response)
            })
        }
        
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