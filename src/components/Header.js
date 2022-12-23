import Nav from "./Nav"

const Header = () => {

    const isHeader = true

    return (
        <header className="header">
            <h1 className="header__title">Titulo</h1>
            {/* 
            
            Nav({
                isHeader: true
            })
            
            */}
            <Nav 
                isHeader={isHeader}
            />
        </header>
    )
}

export default Header