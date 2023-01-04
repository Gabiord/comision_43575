import { useEffect, useState } from "react"


const ItemListContainer = (props) => {

    const [cargo, setCargo] = useState(false)
    const [productos, setProductos] = useState([])//este es el que obtengo al principio y sobre el cual filtro y NUNCA cambio, por si los filtros se reinician
    const [productosFiltrados, setProductosFiltrados] = useState([])//Este es el que muestro en pantalla y voy pisando todo el tiempo

    useEffect(() => {

        console.log("Pido algo a la base de datos")

        setTimeout(() => {

            console.log("Termino de pedir algo a la base de datos")

            const ejemploProductos = [
                { id: 1, nombre: "Televisor", precio: 100, categoria: "electronico" },
                { id: 2, nombre: "Pantalon", precio: 200, categoria: "ropa" },
                { id: 3, nombre: "Mouse", precio: 300, categoria: "electronico" }
            ]

            setCargo(true)
            setProductos(ejemploProductos)
            setProductosFiltrados(ejemploProductos)

        }, 2000)

    }, [])

/* 
    useEffect(()=>{

    },[filtroNombre])




    useEffect(()=>{

    },[filtroCat])

 */




    /* 
    const productosEnJSX = productos.map(producto => (
        <>
        </>
    )) 
    */

    //create a function that filters the products using the price

    //const pf = [...productos]

    const arr = [1, 2, 3]

    //const copia = [arr]  // [ 0 : [1,2,3] ]
    //const copia = [...arr] //

    //arr // [1,2,3]
    //...arr //  1,2,3

    //obj // {x:1,y:2}
    //...obj //  x:1 , y:2

    /* const handleChangeName = (e) => {
        console.dir(e.target)
        const copia = productos.filter(producto => {
            return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setProductosFiltrados(copia)
    }

    const handleChangePrice = (e) => {
        const copia = productos.filter(producto => {
            return producto.precio > Number(e.target.value)
        })
        setProductosFiltrados(copia)
    }

    const handleChangeCategory = (e) => {
        console.log(e.target.value)
        const copia = productos.filter(producto => {
            //producto.categoria == ??
        })
        setProductosFiltrados(copia)
    }
 */

    const handleFilter = e => {
        console.log(e.target.dataset.filter)
        const copia = productos.filter(producto => {
            if(e.target.dataset.filter == "nombre"){
                return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
            }

            if(e.target.dataset.filter == "precio"){
                return producto.precio > Number(e.target.value)
            }

            else {
                return producto.categoria == e.target.value
            }
        })
        setProductosFiltrados(copia)
    }
    return (
        <section>
            {!cargo ? "Cargando..." : "Termino de cargar"}
            {cargo ? "Termino de cargar" : "Cargando..."}
            <nav>
                <input data-filter="nombre" onChange={handleFilter} type="text" placeholder="Nombre del producto" />
                <input data-filter="precio" onChange={handleFilter} type="number" placeholder="mayor a" />
                <select data-filter="categoria" onChange={handleFilter}>
                    <option value="todos">Todos</option>
                    <option value="electronico">Electronico</option>
                    <option value="ropa">Ropa</option>
                </select>
            </nav>
            {productosFiltrados.map(producto => (
                <article>
                    <h2>{producto.nombre}</h2>
                    <p>$ {producto.precio}</p>
                    <p>{producto.categoria}</p>
                </article>
            ))}
            {/* productosEnJSX */}
            {/* {
                productos.map(function(producto){
                    return <></>
                })
            } */}
        </section>
    )
}


export default ItemListContainer