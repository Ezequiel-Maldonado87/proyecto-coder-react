import { useState, useEffect } from "react"
import { getProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({id}) => {

    const [products, setProduct] = useState ([])

    useEffect(() => {
        getProduct('1').then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div>
            <h1>{id}</h1>
            {/*products.map(product => <p key={product.id}> {product.nombre}</p>)*/}
            <ItemDetail key={products.id} {...products}/>
        </div>
    )
    
}

export default ItemDetailContainer