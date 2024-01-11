import { useState } from "react";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const estiloCard = {
    transform: zoom ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s"
  }

  return (
    <div 
      style={estiloCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="item"
    >
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <h2 className="titulo"> {producto.titulo} </h2>
      <p className="precio">${producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">Ver detalle</Link>
    </div>
  );
};
export default Item;