import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"

const Main = () => {

    return (
        <main>
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