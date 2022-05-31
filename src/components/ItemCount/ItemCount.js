import { useState } from "react";
import './ItemCount.css'

const ItemCount = (props) => {
    const [count, setCount] = useState (parseInt(props.initial));

    const decrement = () => {
        //condic para evitar estar por debajo de cero en stock
        if (count > props.initial) {
        setCount(count -1 );
        }        
    }

    const increment = () => {
       //condic. condic para no estra por encima d stock disponible
        if(count < props.stock) {
        setCount(count + 1 );}
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