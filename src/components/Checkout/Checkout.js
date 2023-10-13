import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

export const Checkout = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');

  const { cart, removeProduct, totalPrice } = useCartContext();

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (email !== emailConfirmacion) {
      setError('Los campos de email no coinciden');
      return;
    }
    const total = totalPrice();
    
    const orden = {
      items: cart.map((product) => ({
        id: product.id,
        nombre: product.name,
        cantidad: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };


    
    console.log("orden: "+ JSON.stringify(orden, null, 2))
    Promise.all(
      orden.items.map(async (productoOrden) => {
        const db = getFirestore();
        const productoRef = doc(db, 'products', productoOrden.id);
    
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        console.log('ID del producto:', productoOrden.id);
        console.log('Stock actual:', stockActual);
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        }).then(() => {
          console.log('Stock actualizado correctamente');
        }).catch((error) => {
          console.error('Error al actualizar el stock', error);
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
          .then((docRef) => {
            console.log('Orden creada correctamente. ID:', docRef.id);
            setOrdenId(docRef.id);
            removeProduct();
          })
          .catch((error) => {
            console.error('Error en creación de orden', error);
            setError('Error en orden');
          });
      })
      .catch((error) => {
        console.error('Error en actualización de stock', error);
        setError('No se actualizó el stock');
      });

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailConfirmacion('');
  };

  return (
    <>
      <h2 className="info">
        Rellena el formulario y nos contactaremos para enviar sus productos
      </h2>

      <form onSubmit={manejadorFormulario}>
        {cart.map((item) => (
          <div className="item-check" key={item.id}>
            <p>
              {' '}
              {item.name}  {item.quantity}
            </p>
            <p>  {item.price} </p>
            
          </div>
        ))}

        <div className="form-group">
          <label className="lab-check">Nombre</label>
          <input
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Apellido</label>
          <input
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Telefono</label>
          <input
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Email</label>
          <input
            className="input-check"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Email Confirmacion</label>
          <input
            className="input-check"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p className="error-campos">{error}</p>}

        {ordenId && (
          <p className="orden">
            ¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{' '}
            {ordenId}{' '}
          </p>
        )}

        <div className="checking">
          <button className="check-bt" type="submit">
            Finalizar Compra
          </button>
        </div>
      </form>
    </>
  );
};