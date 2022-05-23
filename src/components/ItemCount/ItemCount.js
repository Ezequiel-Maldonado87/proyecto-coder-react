import { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {
    const [count, setCount] = useState (0)

    const decrement = () => {
        setCount((count) => count -1 )
    }

    const increment = () => {
        setCount(count + 1)
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