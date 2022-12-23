import { useState } from "react"

const ItemListContainer = (props) => {

    //variables de estado (estado de un componente|state) : Son variables que mantienen valores en un componente. En componentes de tipo funcion, se crean con hooks

    //Hooks : Son funciones que nos permiten tener una nueva funcionalidad adentro del componente

    //let loading = true
    //let res = []
    //let error = ""
    //let contador = 0
    //contador = "Hola"

    /* 
    
    const miEstado = useState(0)
    const contador = miEstado[0]
    const cambiarContador = miEstado[1] 
    
    */

    const [contador, setContador] = useState(0)

    //cambiarContador(1) Asincronico | Si se puede hacer 
    //contador = 1 Sincronico | No se puede hacer | No se puede cambiar el valor de una variable de estado directamente

    //const handleClick = () => {}
    //const button = document.querySelector("button")
    //button.addEventListener("click", () => {})
    //button.addEventListener("click", handleClick)

    const handleClick = () => {
        //console.log("click")
        //contador++
        //contador = contador + 1
        //setContador(contador++)
        //contador += 1
        //setContador(contador+=1)
        setContador(contador + 1)
    }

    return (
        <div>
            {props.greeting}
            <p>Contador : {contador}</p>
            <button onClick={handleClick} >sumar</button>
        </div>
    )
}


export default ItemListContainer



let contador = 0
const p = document.querySelector("p")
const button = document.querySelector("button")


button.addEventListener("click", () => {
    contador++
    p.innerText = contador
})