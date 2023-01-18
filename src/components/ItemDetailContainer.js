import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const params = useParams()
    console.log(params.id)

    return (
        <ItemDetail />
    )
}

export default ItemDetailContainer