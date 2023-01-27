import { collection , getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    
    useEffect(() => {

        const pedido = fetch("https://fakestoreapi.com/products")
        const productosCollection = collection(db,"productos")  //CollectionReference/Query
        //getDocs(Query,...)
        const pedidoFirestore = getDocs(productosCollection)

        pedidoFirestore
            .then((respuesta)=>{
                respuesta.docs.forEach(doc=>{
                    //console.log(doc) Es una representacion del doc
                    console.log(doc.data())// Es el contenido del doc
                })
            })
            .catch((error)=>{
                console.log(error)
            })


        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <>
            {load ? null : 'Cargando...'}
            <ItemList productos={productos}/>
        </>
    )
}


export default ItemListContainer