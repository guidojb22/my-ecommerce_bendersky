import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./Carrito.css"

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto } = useContext(CartContext)

  return (
    <div>
      <h2 className="tituloCarrito">Carrito MeluTienda</h2>
      <ul className="listaProductosCarrito">
      {
        carrito.map((producto) => (
          <li key={producto.id} className="productosCarrito">
            <img src={producto.imagen} alt={producto.titulo} className="imagenProductosCarrito" />
            <p className="tituloProductosCarrito">{producto.titulo}</p>
            <p className="cantidadProductosCarrito">Cantidad: {producto.cantidad}</p>
            <p className="precioProductosCarrito">Precio Unitario: ${producto.precio}</p>
            <p className="precioTotalProductosCarrito">Precio Total: ${producto.precio * producto.cantidad}</p>
            <button onClick={ () => borrarProducto(producto.id) } className="borrarProducto" >Eliminar producto</button>
          </li>
        ))
      }
      </ul>
      <button onClick={borrarCarrito} className="borrarCarrito">Eliminar Carrito</button>
    </div>
  )
}
export default Carrito