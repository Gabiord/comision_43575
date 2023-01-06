import { useEffect, useState } from "react"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    useEffect(() => {

        //si tengo una variable y es promesa (y no esta dentro de un .then) entonces le pongo .then
        const pedido = fetch("https://fakestoreapi.com/products")

        pedido
            .then((respuesta) => {

                //habiendo pasado las validaciones de status y headers
                //si tengo una variable que vale promesa adentro de un .then , le hago retorno
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                //console.log(productos)
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })
        //.finally(()=>{})

        /* 
                fetch("https://fakestoreapi.com/products")
                .then((respuesta)=>respuesta.json())
                .then((productos)=>console.log(productos)) */

    }, [])

    return (
        <div>
            {load ? 'Productos Cargados' : 'Cargando...'}
            {productos.map((producto)=>{
                return (
                    <article>
                        <h3>{producto.title}</h3>
                    </article>
                )
            })}
        </div>
    )
}


export default ItemListContainer