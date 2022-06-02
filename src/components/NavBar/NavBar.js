import  './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='nav1'>
            <Link to='/'>
                <h1 className='titu'>TRUCKER</h1>
            </Link>
            <div className='botonera'>
                {/*<button className= 'botonNav'>Productos</button>*/}
                <Link to={'/'} className= 'botonNav'>Productos</Link>
                <Link to={'/categoria/Carne'} className= 'botonNav'>Carne</Link>
                <Link to={'/categoria/Pollo'} className= 'botonNav'>Pollo</Link>
                <Link to={'/categoria/Vegan'} className= 'botonNav'>Vegan</Link>
                <CartWidget cantidad="8"/>
            </div>

        </nav>
    )
}

export default NavBar