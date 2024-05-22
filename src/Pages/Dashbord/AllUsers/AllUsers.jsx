import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All Users:</h1>
                <h1 className="text-3xl">Total Users:{users.length}</h1>
            </div>
        </div>
    );
};

export default AllUsers;