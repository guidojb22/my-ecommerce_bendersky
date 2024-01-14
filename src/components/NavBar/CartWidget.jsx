import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)
    
    return(
        <div id="cartwidget">
            <img src="/img/cart.png" alt="cart" />
            <p id="number">{totalCantidad()}</p>
        </div>
    )
}

export default CartWidget