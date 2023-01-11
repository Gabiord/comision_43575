import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                {/* <Route path="/productos/:categoria" element={<ItemListContainer/>}/> */}

                {/* <Route path="/item/:id" element={<DetalleProducto/>}/> */}
            </Routes>
        </main>
    )
} 

export default Main