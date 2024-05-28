import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MenuMain from "../Pages/Menu/MenuMain/MenuMain";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashbord/Cart/Cart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AddItem from "../Pages/Dashbord/AddItem/AddItem";
import AdminRoute from "./AdminRoute/AdminRoute";
import MangageItems from "../Pages/Dashbord/MangageItems/MangageItems";
import UpdatedItem from "../Pages/Dashbord/UpdatedItem";
import Payment from "../Pages/Dashbord/Payment/Payment";
import PaymentHistory from "../Pages/Dashbord/PaymentHistory.jsx/PaymentHistory";
import UserHome from "../Pages/Dashbord/UserHome/UserHome";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <MenuMain></MenuMain>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            //normal user routes{
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            //admin routes
            {
                path: 'adminHome',
                element: <AdminRoute>
                    <AdminHome></AdminHome>
                </AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute>
                    <AddItem></AddItem>
                </AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute>
                    <MangageItems></MangageItems>
                </AdminRoute>
            },
            {
                path: 'updatedItem/:id',
                element: <AdminRoute>
                    <UpdatedItem></UpdatedItem>
                </AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

        ]
    }
]);