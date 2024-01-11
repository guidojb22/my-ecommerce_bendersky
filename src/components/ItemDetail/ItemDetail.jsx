import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"; 
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {

    const agregarAlCarrito = (contador) => {
      const productosEnCarrito = { contador, nombre: producto.titulo }
      console.log(productosEnCarrito)
      setToggle(true)
    }

    const [toggle, setToggle] = useState(false)

    return (
      <div className="item-detalle">
        <img className="imagen-detalle" src={producto.imagen} alt={producto.nombre} />
        <div className="texto-detalle">
          <h2 className="titulo-detalle"> {producto.titulo} </h2>
          <p className="descripcion-detalle"> {producto.descripcion} </p>
          <p className="precio-detalle">${producto.precio} </p>
          {
            toggle ? (
              <Link to="/carrito" className="terminarCompra">Terminar compra</Link>
            ) : 
            (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>)
          }
        </div>
      </div>
    )
  }
  export default ItemDetail