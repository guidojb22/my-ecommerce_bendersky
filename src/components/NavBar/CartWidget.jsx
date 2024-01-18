import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { carrito, totalCantidad } = useContext(CartContext)
    
    return(
        <Link to="/carrito" id="cartwidget">
            <img src="/img/cart.png" alt="cart" />
            {
                carrito.length !== 0 && <p id="number">{totalCantidad()}</p>
            }
        </Link>
    )
}

export default CartWidget