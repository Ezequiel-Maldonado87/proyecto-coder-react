import  './NavBar.css'

const NavBar = () => {
    return (
        <nav className='nav1'>
            <h1 className='titu'>TRUCKER</h1>
            <div className='botonera'>
                <button className= 'botonNav'>Productos</button>
                <button className= 'botonNav'>Sobre nosotros</button>
                <button className= 'botonNav'>Contacto</button>
            </div>
        </nav>
    )
}

export default NavBar