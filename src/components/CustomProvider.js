import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider 
//el contexto se lee asi : 
//import {useContext} from "react"
// const valorDelContexto = useContext(objetoContexto)

const CustomProvider = ({children}) => {

    const [edad,setEdad] = useState(0)

    const cambiarEdad = (nuevaEdad) => {
        //mas logica aca
        setEdad(nuevaEdad)
    }
    

    const valorDelContexto = {
        carrito : [],
        totalProductos : 0,
        edad : edad,
        cambiarEdad : cambiarEdad
    }



    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider