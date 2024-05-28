import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            //ekhane api secure korar jonno headers use kora hoi nai , karon seta interceptors ei useAxiosSecure er moddei kora hoise


            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;