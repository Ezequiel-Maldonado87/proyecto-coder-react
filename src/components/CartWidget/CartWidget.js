import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className='carrito'>
            <img src='/images/cart.png' alt='cart-widget'/>
            <h6>{props.cantidad}</h6>      
        </div>
    )
}

export default CartWidget