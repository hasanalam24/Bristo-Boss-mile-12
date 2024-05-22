import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosCommon from "../../Hooks/useAxiosCommon";




const Register = () => {

    const axiosCommon = useAxiosCommon()

    const { signUpUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        // console.log(data)
        signUpUser(data.email, data.password)
            .then(() => {
                userUpdateProfile(data.name, data.photoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosCommon.post('/users', userInfo)
                            .then(res => {
                                console.log('user added to the db')
                                if (res.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')

                                }
                            })


                    }).catch((error) => {
                        // An error occurred
                        console.log(error.message)
                        // ...
                    });
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // console.log(watch("example"))


    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(email, password)

    //     signUpUser(email, password)
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" {...register("name", { required: true })} type="name" placeholder="Name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">User name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">this field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    // pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*(a-z))/
                                })} placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className="text-red-600">This field is required</span>}
                                {/* {errors.password?.type === 'minLength' && <span className="text-red-600">min character 6 letters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">max character 20 letters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must one upper , Lowercase, a number</span>} */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary" >Register</button>
                            </div>
                        </form>
                        <Link to="/login">Login</Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;