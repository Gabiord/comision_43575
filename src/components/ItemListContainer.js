import { useEffect, useState } from "react"


const ItemListContainer = (props) => {

    const [cargo, setCargo] = useState(false)
    const [productos,setProductos] = useState([])

    
    useEffect(() => {

        //Lo que pasa aca es asincronico
        //operacioX() //Es una operacion muy costosa  por tiempo , por peso , por complejidad,  como pedir algo a la base de datos
        console.log("Pido algo a la base de datos")

        setTimeout(() => {

            console.log("Termino de pedir algo a la base de datos")
            
            const ejemploProductos = [
                {id:1, nombre:"Producto 1", precio:100},
                {id:2, nombre:"Producto 2", precio:200},
                {id:3, nombre:"Producto 3", precio:300}
            ]

            //const copiaProductos = [...productos]
            //const copiaProductos = productos.slice(0)
            //const copia = productos

            /* ejemploProductos.forEach(producto=>{
                //productos.push(producto)
                copia.push(producto)
            }) */
            
            setCargo(true)
            setProductos(ejemploProductos)
            //setProductos(copiaProductos)

        }, 2000)

    },[])

    return (
        <div>
            {!cargo ? "Cargando..." : "Termino de cargar"}
            {cargo ? "Termino de cargar" : "Cargando..."}
        </div>
    )
}


export default ItemListContainer