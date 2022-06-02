import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, descripcion, img}) => {
    return (
    
        <div className="card">
            <img className='imgCard' src={img} alt={nombre} />
            <div>
                <h4>{nombre}</h4>
                <span>{precio}</span>
                <hr></hr>
                <Link to={'/detail/:productoId'} className= 'botonNav'>Detalle</Link>
            </div>           
        </div>
    )

}

export default Item