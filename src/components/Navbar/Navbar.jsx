import "./Navbar.css";
import Pokeball from "../../assets/Pokeball.png"
import {Link, useNavigate} from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <Link to="/" className="home-button">
                <img src={Pokeball} alt="pokeball" className="pokeball"/>
                <span>Home</span>
            </Link>

            <button className="sidebar-btn">Login</button>
            <button className="sidebar-btn">Account</button>
            <button className="sidebar-btn">Collection</button>
            <button className="sidebar-btn">Search</button>
            <button className="sidebar-btn">Register</button>
            <button className="sidebar-btn">Logout</button>

        </div>
    );
}

export default Navbar;