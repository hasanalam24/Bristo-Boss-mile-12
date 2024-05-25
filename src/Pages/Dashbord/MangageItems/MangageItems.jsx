import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/UseHooksMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MangageItems = () => {

    const [menu, refetch] = useMenu()

    const axiosSecure = useAxiosSecure()



    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {

                    Swal.fire({
                        position: "top-end",
                        title: `${item.name} has been Deleted!`,

                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                    refetch()
                }
                console.log(res.data)


            }
        });
    }


    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up!"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updatedItem/${item._id}`}>
                                            <button

                                                className="btn bg-orange-500 btn-md ">
                                                <FaEdit className="text-white text-md"></FaEdit>

                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item)}
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

export default MangageItems;