import { useParams } from "react-router-dom"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const params = useParams()

    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer