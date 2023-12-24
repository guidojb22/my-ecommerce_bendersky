import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <h2 className="titulo"> {producto.titulo} </h2>
      <p className="precio">${producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">Ver detalle</Link>
    </div>
  );
};
export default Item;