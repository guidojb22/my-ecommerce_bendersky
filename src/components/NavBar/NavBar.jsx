import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return(
        <div id="navbar">
            <p id="items">
            <Link to="/">
                <h1>MeluTienda</h1>
            </Link>
                <ul id="links">
                    <li>
                        <Link to="/categoria/tenedor">Tenedores</Link>
                    </li>
                    <li>
                        <Link to="/categoria/cuchillo">Cuchillos</Link>
                    </li>
                    <li>
                        <Link to="/categoria/cuchara">Cucharas</Link>
                    </li>
                    <li>
                        <Link to="/categoria/cucharita">Cucharitas</Link>
                    </li>
                </ul>
                <CartWidget />
            </p>
        </div>
    )
}

export default NavBar 