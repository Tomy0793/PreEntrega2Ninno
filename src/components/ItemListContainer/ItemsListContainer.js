import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../Products.json'
import ItemList from '../ItemList/ItemList'


const ItemsListContainer = () => {
  
  const [item, setItem] = useState([])
  const {id} = useParams()
  
  useEffect(() =>{
    const fetchData = async ()=>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout(() => {
            resolve( id ? arrayProductos.filter(i => i.category === id) :arrayProductos)
          }, 3000);
        })
        setItem(data)
      }catch(error){
console.log("error", error)
      } 
    }
    fetchData()
  },[id])
  
  return (
    <div className='container'>

<div className='row'>
      <ItemList item= {item} />
      </div>

    </div>
  )
}

export default ItemsListContainer