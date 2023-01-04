import Nav from "./Nav"

const Header = ({children}) => {

    const isHeader = true

    return (
        <>
            <header className="header">
                <h1 className="header__title">Titulo</h1>
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