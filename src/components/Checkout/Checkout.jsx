import React, { useContext, useState } from 'react';

import Form from './Form';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import Swal from 'sweetalert2';

import "./Checkout.css"

const Checkout = () => {
const [datosForm, setDatosForm] = useState({
  nombre: "",
  telefono: "",
  email: "",
  emailRepetido: ""
})

const [idOrden, setIdOrden] = useState(null)

const {carrito, totalPrecio, borrarCarrito} = useContext(CartContext)

const guardarDatosInput = (event) => {
  setDatosForm( { ...datosForm, [event.target.name]: event.target.value } )
}

const enviarOrden = (event) => {
  event.preventDefault()
  if(datosForm.email === datosForm.emailRepetido){
    const orden = {
      comprador: {...datosForm},
      productos: [...carrito],
      fecha: new Date(),
      total: totalPrecio()
    }
    subirOrden(orden)
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debe repetir el e-mail correctamente.",
    });
  }
}

const subirOrden = (orden) => {
  const ordenesRef = collection(db, "ordenes");
  addDoc(ordenesRef, orden).then((respuesta)=> {
    setIdOrden(respuesta.id);
    borrarCarrito()
  });
};

  return (
    <div>
      {
        idOrden ? (
          <div>
            <h2>Orden generada correctamente</h2>
            <p>Número de orden: {idOrden} </p>
          </div>
        ): (
          <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden} />
        )
      }
    </div>
  )
}

export default Checkout