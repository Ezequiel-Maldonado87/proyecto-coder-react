import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState ()

    const {productoId} = useParams()
    

    useEffect(() => {
        getProduct(productoId).then(response => {
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