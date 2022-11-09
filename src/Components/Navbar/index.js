import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
const Navbar = () => {

    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        setUser(false);
        navigate("/auth/login", { replace: true, state: { gonderilecekVeri: "12345" } })
    }

    return <nav style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button onClick={handleLogOut} >Log Out</button>
    </nav>
}

export default Navbar;