import { Link } from "react-router-dom"

const Nav = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header__navbar">
                <Link className="header__link" to="/productos/electronicos">electronicos</Link>
                <Link className="header__link" to="/productos/ropa">ropa</Link>
                <Link to="/carrito">
                    <span className="material-icons">shopping_cart</span>
                </Link>
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