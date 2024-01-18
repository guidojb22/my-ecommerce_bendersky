import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"

import "./ItemListContainer.css"

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
  
    const { categoria } = useParams();
  
    useEffect(() => {
      let consulta 
      const productosRef = collection(db, "productos")
      if (categoria) {
        consulta = query(productosRef, where("categoria","==",categoria))
      }else {
        consulta = productosRef
      }

      getDocs(consulta)
        .then((respuesta)=> {
          let productosDb = respuesta.docs.map((producto)=>{
            return { id: producto.id, ...producto.data() }
          });
          setProductos(productosDb)
        }); 
    }, [categoria]);
  
    return(
            <div className="item-list-container">
              <p className="saludo">{saludo}</p>
              <ItemList productos={productos} />
            </div>
          )}
  
  export default ItemListContainer;