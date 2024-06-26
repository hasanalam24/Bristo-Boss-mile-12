import { useQuery } from "@tanstack/react-query"

import useAxiosCommon from "./useAxiosCommon"
// import { useEffect, useState } from "react"

const useMenu = () => {
    const axiosCommon = useAxiosCommon()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {

    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu, loading]



    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosCommon.get('/menu')
            return res.data
        }
    })


    return [menu, loading, refetch]
}

export default useMenu