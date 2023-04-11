import { Link } from "react-router-dom";
import './navcss.css'

const Nav = () => {
    return (
<div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>
                    <i class="bi bi-house-door"></i> Home</Link>
                    <Link className="nav-item nav-link active" to='/shop'>
                    <i class="bi bi-shop-window"></i> Shop</Link>
                    <Link className="nav-item nav-link active" to='/Register'>
                    <i class="bi bi-person-add"></i> Register</Link>
                    <Link className="nav-item nav-link active" to='/Login'>
                    <i class="bi bi-box-arrow-in-right"></i> Login</Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;