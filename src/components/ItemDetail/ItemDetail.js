import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';

const ItemDetail = ({nombre,img,descripcion,precio, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const value = useContext(Context)
    console.log(value)

    const onAdd = (count) => {
        //console.log(count)
        setQuantity(count)
    }


    return (
    
        <div className="cardtwo">
            <img className='imgCardtwo' src={img} alt={nombre} />
            <div>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <span>{precio}</span>
                <p className='aclaracion'>Disponemos de la versión vegetariana.</p>
                 
            </div>
            <div className='divCount'>
            { quantity > 0 ? <Link to='/cart/'> Finalizar compra </Link> : <ItemCount initial="0" stock={stock} onAdd={onAdd}/> }
            </div>
               
        </div>
    )

}

export default ItemDetail