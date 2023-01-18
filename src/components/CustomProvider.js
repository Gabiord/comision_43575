import { createContext } from "react"

const contexto = createContext()
const Provider = contexto.Provider //El Provider le da el valor definitivo al contexto
//Ademas, desde donde este ubicado, todos los children pueden acceder a este valor

//const Consumer = contexto.Consumer //El Consumer consumer el valor del contexto
//hoy por hoy para leer el valor del contexto se usa un hook useContext

const CustomProvider = ({children}) => {

    const valorDelContexto = {
        carrito : [],
        totalProductos : 0
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider