import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useColleges = () => {
    const axiosPublic = useAxiosPublic()
    const { data: colleges = [] } = useQuery({
        queryKey: ['anotherColleges'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allColleges')
            return res.data;
        }
    })
    return [colleges]
};

export default useColleges;