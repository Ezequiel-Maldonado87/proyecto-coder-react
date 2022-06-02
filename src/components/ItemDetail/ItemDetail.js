import './ItemDetail.css'

const ItemDetail = ({nombre,img,descripcion,precio}) => {
    return (
    
        <div className="cardtwo">
            <img className='imgCardtwo' src={img} alt={nombre} />
            <div>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <span>{precio}</span>
                <p className='aclaracion'>Disponemos de una opción vegana.</p>
            </div>           
        </div>
    )

}

export default ItemDetail