import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
  return (
 <Link to={'/item/' + item.id} className='text-decoration-none'>
  <div className='card'>
 <img className="card-img-top" src={item.image} alt="Productos de la web" />

  <div className='card-body'> 
    <h5 className='card-title'>-Modelo: {item.name}</h5>
    <p><b>-Medida: {item.size}</b></p>
    <p><b>Clickea para Ampliar info!</b></p>
  </div>
  </div>
 </Link>
  )
}

export default Item