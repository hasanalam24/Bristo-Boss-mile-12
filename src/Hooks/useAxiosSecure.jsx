// import axios from "axios";

// export const axiosSecure = axios.create({
//     baseURL: 'http://localhost:5000'
// })
// const useAxiosSecure = () => {

//     return axiosSecure
// };

// export default useAxiosSecure;

//ekadik api k secure korar jonno headers alada alada vabe use na kore ekhanei use korbo jate sob jaigai Secure  hoi. tai nicher moto kora holo

import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        //Do Something with request error
        return Promise.reject(error)
    });


    //intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // console.log('error in the intercepts',error)
        const status = error.response.status;
        console.log('error in the intercepts', status)
        return Promise.reject(error)
    })


    return axiosSecure
};

export default useAxiosSecure;