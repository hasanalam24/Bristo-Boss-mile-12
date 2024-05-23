import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            //ekhane api secure korar jonno headers use kora hoi nai , karon seta interceptors ei useAxiosSecure er moddei kora hoise

            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;