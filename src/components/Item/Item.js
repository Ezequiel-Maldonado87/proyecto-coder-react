import './Item.css'

const Item = ({nombre, precio, descripcion, img}) => {
    return (
    
        <div className="card">
            <img className='imgCard' src={img} alt={nombre} />
            <div>
                <h4>{nombre}</h4>
                <span>{precio}</span>
            </div>           
        </div>
    )

}

export default Item