import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../Products.json'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const {id} = useParams()
  
  useEffect(() =>{
  const promesa = new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(arrayProductos.find((i => i.id === parseInt(id))))
    }, 1500);
  })        
  promesa.then((data)=>{
    setItem(data)
  })
  },[id])
  
  return (
    <div className='container'>

<div className='row'>
      <ItemDetail item= {item} />
      </div>

    </div>
  )
}


export default ItemDetailContainer