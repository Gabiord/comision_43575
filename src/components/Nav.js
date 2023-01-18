import { Link, NavLink } from "react-router-dom"


const Nav = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header__navbar">
                <NavLink className="header__link" to="/productos/electronicos">electronicos</NavLink>
                <NavLink className="header__link" to="/productos/ropa">ropa</NavLink>
                <NavLink to="/carrito">
                    <span className="material-icons">shopping_cart</span>
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