import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

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
      <p><b>-Stock:</b> ${item.stock}</p>
      <p><b>-Precio:</b> ${item.price}</p>
     </div>
     <div>
      {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={10} initial={0} onAdd={onAdd} />}
     </div>
     </div>

  )

 }


export default ItemDetail