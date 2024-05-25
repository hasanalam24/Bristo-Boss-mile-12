import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdatedItem = () => {
    const { register, handleSubmit, reset } = useForm()
    const { name, category, price, recipe, _id } = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const axiosCommon = useAxiosCommon()
    const onSubmit = async (data) => {
        // console.log(data)

        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosCommon.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(res.data)
        if (res.data.success) {
            //now sendt the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // reset()
            }

        }
    }

    return (
        <div>
            <SectionTitle heading="Updated an Item" subHeading="Refresh Info"></SectionTitle>


            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>

                        </div>
                        <input
                            defaultValue={name}
                            {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-6">
                        {/* category */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>

                            </div>
                            <select defaultValue={category}
                                {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>

                        </label>

                        {/* price */}


                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input
                                defaultValue={price}
                                {...register('price', { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />

                        </label>

                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>

                        </div>
                        <textarea
                            defaultValue={recipe}
                            {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details type here"></textarea>

                    </label>

                    <div className="form-control w-full my-6">
                        <input
                            {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Updated Menu Item
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdatedItem;