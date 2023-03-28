import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import './NavBar.css'

const NavBar = () => {

    const auth = useAuth();

    return (
        <div className = "nav-bar">
            <h2>Blogger 2.0 </h2>
            <Link to="/"> Home   </Link> 
            <Link to="/list"> List All   </Link>
            <Link to="/blog-form"> Create New </Link>
            <Link to="/registration"> Registration Form   </Link>
            <Link to="/login"> Login Form   </Link>
            <button onClick={()=>{
                auth.logout()
            }}>Logout</button>
        </div>
    )
}
export default NavBar;