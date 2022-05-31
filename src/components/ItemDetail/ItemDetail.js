import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, descripcion, img}) => {
    return (
    
        <div className="cardtwo">
            <img className='imgCardtwo' src={img} alt={nombre} />
            <div>
                <h1>{id}</h1>
                <h4>{nombre}</h4>
                <p>{descripcion}</p>
                <span>{precio}</span>
            </div>           
        </div>
    )

}

export default ItemDetail