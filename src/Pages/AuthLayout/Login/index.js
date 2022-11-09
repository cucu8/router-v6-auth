import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const Login = () => {

    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setUser({
            id: 1,
            name: "Cuneyt Donmez"
        });
        navigate("/");
    }

    return <div>
        <h1>Login</h1>
        <button onClick={handleLogin} >Login</button>
    </div>
}

export default Login;