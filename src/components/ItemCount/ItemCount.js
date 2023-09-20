import React from 'react'
import {useState} from 'react'


const ItemCount = () => {
  
  
    const [contador, setContador] = useState(1)
  
    const sumar = () =>{
        setContador(contador + 1)
    }

    const restar = () =>{
        setContador(contador - 1)
    }
    
  
    return (
    <div>
      <button onClick={restar}><i class="bi bi-dash-lg"></i></button>
        <span> {contador} </span>
        <button onClick={sumar}><i class="bi bi-plus-lg"></i></button>
        <br></br>
        <button>Agregar al carrito</button>
    </div>

  )
}

export default ItemCount