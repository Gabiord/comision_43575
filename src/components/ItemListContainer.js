import { collection, getDocs , query, where } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { toast } from "react-toastify"


const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        toast.info("Cargando productos...")
        const productosCollection = collection(db, "productos") //CollectionReference/Query

        //getDocs(Query)
        //query(Query,Constraint)
        //where(propieda,operador,valor)

        //const filtro = query(productosCollection,where("category","==","clothing"),where("price",">",100))
        const filtro = query(productosCollection,where("category","==","clothing"))
        const pedidoFirestore = getDocs(filtro)

        pedidoFirestore
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProductos(productos)
                setLoad(true)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
            .catch((error) => {
                console.log(error)
                toast.error("Hubo un error, vuelva a intentarlo!" + error.message)
            })
    }, [])

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemList productos={productos} />
        </>
    )
}


export default ItemListContainer