import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/users', {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('access-token')}`
            //     }
            // })
            //Jehetu onekgula api k Secure korte hobe tai uporerta headers cut kore HooksAxiosSecure a niye seta interceptors er modde user kora hoyese
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        timer: 1500,
                        text: `${user.name} is an Admin Now!`,
                        icon: "success",
                        showConfirmButton: false,

                    });
                }
            })
    }


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h1 className="text-3xl">All Users:</h1>
                <h1 className="text-3xl">Total Users:{users.length}</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin'
                                                :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn bg-orange-500 btn-md ">
                                                    <FaUsers className="text-white text-2xl"></FaUsers>
                                                </button>}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="btn btn-ghost btn-lg text-red-600">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;