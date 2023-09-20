import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'
const ItemDetail = ({item}) => {
  return (

    <div className='card row estilo'>
    <img className="card-img-top" src={item.image} alt=""/>
   
     <div className='card-body'> 
       <h5 className='card-title'>-Modelo: {item.name}</h5>
       <p><b>-Medida: {item.size}</b></p>
       <p><b>Clickea para Ampliar info!</b></p>
       <p><b>-Tecnologia:</b> {item.tecnology}</p>
      <p><b>-Soporte de peso:</b> {item.weight} Kg.</p>
      <p><b>-Descripcion:</b> {item.description}</p>
      <p><b>-Precio:</b> ${item.price}</p>
      <ItemCount/>
     </div>
     </div>
  )
}

export default ItemDetail