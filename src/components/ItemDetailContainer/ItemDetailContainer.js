import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ()

    useEffect(() => {
        getProduct('1').then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetailContainerDiv'>           
            {/*products.map(product => <p key={product.id}> {product.nombre}</p>)*/}
            <ItemDetail nombre={product?.nombre} {...product}/>
        </div>
    )
    
}

export default ItemDetailContainer