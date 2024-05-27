import { FaBook, FaCalendar, FaEnvelope, FaHome, FaJediOrder, FaList, FaListAlt, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    const [cart] = useCart()

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to="/dashboard/adminHome">
                                    <FaShoppingCart></FaShoppingCart>
                                    Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/manageItems">
                                    <FaListAlt></FaListAlt>
                                    Manange Items</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/users">
                                    <FaUser></FaUser>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>

                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart {
                                            cart.length > 0 && <>({cart.length})</>
                                        }</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/review">
                                        <FaRotate></FaRotate>
                                        Add a Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Payment Real History</NavLink>
                                </li>
                            </>
                    }


                    {/* shared nav Links */}
                    <div className="divider"></div>

                    <li>

                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/salad">
                            <FaJediOrder></FaJediOrder>
                            Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to="/">
                            <FaEnvelope></FaEnvelope>

                            Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;