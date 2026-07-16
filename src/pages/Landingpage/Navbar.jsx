import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>

            <ul className="nav-links">

                <li className="logo-section">
                    <img src={logo} alt="Logo" />
                    <span>PROJEX</span>
                </li>

                <li>
                    <a href="#home">HOME</a>
                </li>

                <li>
                    <a href="#about">ABOUT</a>
                </li>

                <li>
                    <a href="#features">FEATURES</a>
                </li>

                <li>
                    <a href="#contact">CONTACT</a>
                </li>

            </ul>

            <ul className="auth-links">

                <li>
                    <Link to="/login">LOGIN</Link>
                </li>

                <li>
                    <Link to="/register">SIGN UP</Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;