import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAuth = () => {
    const authCon = useContext(AuthContext)
    return authCon
};

export default useAuth;