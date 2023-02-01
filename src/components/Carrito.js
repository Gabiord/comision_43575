import { addDoc, collection , serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"
import UsuariosList from "./UsuariosList"


const Carrito = () => {
    
    const [nombre,setNombre] = useState("")
    const [email,setEmail] = useState("")
    const [usuarios,setUsuarios] = useState([])

    const handleClick = (e) => {
        
        const orden = {
            usuario : {
                nombre : "Horacio",
                email : "horacio@test.com",
                telefono : "555555555"
            },
            productos : [],
            fecha : serverTimestamp()
        }

        const ventasCollection = collection(db,"ventas")
        const pedido = addDoc(ventasCollection,orden)

        pedido
        .then((resultado)=>{
            console.log(resultado.id)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    
    
    const handleChangeName = (e) => {
        setNombre(e.target.value)
    }
    
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    
    
    return (
        <div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
            </div>
            <button onClick={handleClick}>terminar compra</button>
            <UsuariosList usuarios={usuarios}/>
        </div>
    )
}

export default Carrito