"use strict"
import {Link} from "react-router-dom"

const Menu = () => {
    return(
        <>
            <nav>
                <h1>
                    <Link className='menu-elemento' to='/'>Inicio</Link>
                    <Link className='menu-elemento' to='/peliculas'>Peliculas</Link>
                    <Link className='menu-elemento' to='/acercade'>Acerca De</Link>
                    <Link className='menu-elemento' to='/'>Inicio</Link>
                    <Link className='menu-elemento' to='*'/>
                </h1>
            </nav>
        </>
    )
}

export default Menu