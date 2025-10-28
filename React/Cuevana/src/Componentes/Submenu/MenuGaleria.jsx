"use strict"
import { Link } from "react-router-dom"
const MenuGaleria = () =>{
    return (
        <>
                <Link to='/galeria/titulo'>Titulo</Link>
                <Link to='/galeria/director'>Director</Link>
                <Link to='/galeria/actor'>Actor</Link>
        </>
    )
}

export default MenuGaleria