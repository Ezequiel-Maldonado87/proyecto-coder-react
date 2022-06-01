import { useState } from "react";
import './ItemCount.css'

const ItemCount = (props) => {
    const [count, setCount] = useState (parseInt(props.initial));

    const decrement = () => {
        //Condic para evitar estarpor debajo de cero en el stock
        if(count > props.initial){
        setCount(count -1 );
        }
    }

    const increment = () => {
        //Condici. para no estar por encima del stock disponible
        if(count < props.stock){
        setCount(count + 1);
        }
    }

    return(
        <div className="counta" style={{ display: 'flex'}}>
            <button className="crement" onClick={decrement}>-</button>
            <h1 className="titCount">{count}</h1>
            <button className="crement" onClick={increment}>+</button>
            <button className="botCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount