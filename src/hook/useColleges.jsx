import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useColleges = () => {
    const axiosPublic = useAxiosPublic()
    const { data: colleges = [], isLoading } = useQuery({
        queryKey: ['anotherColleges'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allColleges')
            return res.data;
        }
    })
    return [colleges, isLoading]
};

export default useColleges;