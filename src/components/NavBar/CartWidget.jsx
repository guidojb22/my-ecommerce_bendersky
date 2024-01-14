import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

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