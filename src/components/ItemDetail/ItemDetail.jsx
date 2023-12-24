import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    return (
      <div className="item-detalle">
        <img className="imagen-detalle" src={producto.imagen} alt={producto.nombre} />
        <div className="texto-detalle">
          <h2 className="titulo-detalle"> {producto.titulo} </h2>
          <p className="descripcion-detalle"> {producto.descripcion} </p>
          <p className="precio-detalle">${producto.precio} </p>
        </div>
      </div>
    )
  }
  export default ItemDetail