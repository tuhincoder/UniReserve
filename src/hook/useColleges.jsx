
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useEffect, useState } from "react";


const useColleges = () => {
    const axiosPublic = useAxiosPublic()
    // const [colleges, setColleges] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // useEffect(() => {
    //     axiosPublic.get('/allColleges')
    //         .then(res => res.json())
    //         .then(data => {
    //             setColleges(data)
    //             setIsLoading(false)
    //         })
    // }, [axiosPublic])

    const { data: colleges = [], isLoading } = useQuery({
        queryKey: ['another'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allColleges')
            return res.data;
        }
    })
    return [colleges, isLoading]
};

export default useColleges;