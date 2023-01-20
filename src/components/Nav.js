import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"


const Nav = (props) => {

    const { isHeader, textLinkFooter, hrefLinkFooter } = props
   
    if (isHeader) {
        return (
            <nav className="header__navbar">
                <NavLink className="header__link" to="/productos/electronicos">electronicos</NavLink>
                <NavLink className="header__link" to="/productos/ropa">ropa</NavLink>
                <CartWidget/>
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