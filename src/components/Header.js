import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = ({children}) => {

    const isHeader = true

    return (
        <>
            <header className="header">
                <Link to="/">
                    <h1 className="header__title">Titulo</h1>
                </Link>
                {children}
                <Nav
                    isHeader={isHeader}
                />
            </header>
            <Nav />
        </>
    )
}

export default Header