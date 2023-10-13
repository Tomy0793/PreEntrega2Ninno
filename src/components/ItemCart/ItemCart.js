import React from 'react';
import { useCartContext } from '../Context/CartContext';


const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={item.image} alt={item.title} />
            <div>
                <p>Título: {item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio x unidad: $ {item.price}</p>
                <p>Subtotal: ${item.quantity * item.price}</p>
                <button onClick={() => removeProduct(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart