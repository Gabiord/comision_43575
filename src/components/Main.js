import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"
import { useContext } from "react"
import { contexto } from "./CustomProvider"

const Main = () => {

    const { edad } = useContext(contexto)

    return (
        <main>
            <h1>Edad : {edad}</h1>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
            </Routes>
        </main>
    )
}

export default Main