import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return(
        <div id="navbar">
            <p id="items">
                <h1>MeluTienda</h1>
                <ul id="links">
                    <li>
                        <a href="#">Tenedores</a>
                    </li>
                    <li>
                        <a href="#">Cuchillos</a>
                    </li>
                    <li>
                        <a href="#">Cucharas</a>
                    </li>
                    <li>
                        <a href="#">Cucharitas</a>
                    </li>
                </ul>
                <CartWidget />
            </p>
        </div>
    )
}

export default NavBar 
