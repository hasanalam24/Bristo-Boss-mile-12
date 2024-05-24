import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [cart] = useCart()

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <TiShoppingCart></TiShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

    </>

    const handleLogout = () => {
        signOutUser()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'User LogOut Successfully',
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bristo Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {
                    user ? <>
                        <span>{user.displayName}</span>
                        <button onClick={handleLogout} className="btn btn-secondary">LogOut</button>
                    </> : <Link to="/login" className="navbar-end">
                        <a className="btn">Login</a>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;