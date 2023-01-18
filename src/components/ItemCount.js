import { useState } from "react"

const ItemCount = ({stock , onAdd}) => {

  const [contador, setContador] = useState(1)

  const handleSumar = () => {
    if(contador < stock){
      setContador(contador + 1)
    }
  }

  const handleRestar = () => {
    setContador(contador - 1)
  }

  const handleConfirmar = () => {
    onAdd(contador)
  }


  const handleResetear = () => {
    setContador(1)
  }

  return (
    <div>
      <button onClick={handleResetear}>reset</button>
      <button onClick={handleSumar}>+</button>
      <p>Cantidad : {contador}</p>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleConfirmar}>confirmar</button>
    </div>
  )
}

export default ItemCount