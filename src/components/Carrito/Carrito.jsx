import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import "./Carrito.css"

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carritoVacio">
        <h3>El carrito esta vacio</h3>
        <Link to="/" className="volverAlIndex">
          Mirá nuestros productos
        </Link>
      </div>
    );
  }

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
      <h3 className="totalAPagar">Total a pagar: ${totalPrecio()}</h3>
      <Link to="/checkout" className="avanzarCompra">
        Avanzar con mi compra
      </Link>
      <button onClick={borrarCarrito} className="borrarCarrito">Eliminar Carrito</button>
    </div>
  )
}
export default Carrito