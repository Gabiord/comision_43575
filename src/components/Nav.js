import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { contexto } from "./CustomProvider"


const Nav = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    //const valorDelContexto = useContext(contexto)
    //const totalProductos = valorDelContexto.totalProductos

    const { totalProductos , edad , cambiarEdad } = useContext(contexto)

    const handleClick = () => {
        cambiarEdad(33)
    }

   
    if (isHeader) {
        return (
            <nav className="header__navbar">
                <p>Edad : {edad}</p>
                <button onClick={handleClick}>cambiar edad</button>
                <NavLink className="header__link" to="/productos/electronicos">electronicos</NavLink>
                <NavLink className="header__link" to="/productos/ropa">ropa</NavLink>
                <NavLink to="/carrito">
                    <span className="material-icons">shopping_cart</span>
                    {totalProductos}
                </NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="header__navbar">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default Nav