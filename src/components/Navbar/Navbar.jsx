import "./Navbar.css";
import Pokeball from "../assets/Pokeball.png"
function Navbar() {
    return (
        <div className="sidebar">

            <img src={Pokeball} alt="pokeball" className="pokeball" />

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