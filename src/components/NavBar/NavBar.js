import  './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='nav1'>
            <h1 className='titu'>TRUCKER</h1>
            <div className='botonera'>
                <button className= 'botonNav'>Productos</button>
                <button className= 'botonNav'>Sobre nosotros</button>
                <button className= 'botonNav'>Contacto</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar