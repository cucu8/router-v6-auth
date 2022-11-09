import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar";
const HomeLayout = () => {
    return <div>
        <NavBar />
        <Outlet />
    </div>
}

export default HomeLayout;