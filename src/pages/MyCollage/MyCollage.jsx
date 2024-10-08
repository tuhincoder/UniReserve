import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import FormCart from "./FormCart";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/common/Loading";


const MyCollage = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: form = [], isLoading } = useQuery({
        queryKey: ['formData', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/form?email=${user?.email}`)
            return res.data
        }
    })
    // -------------


    if (isLoading) {
        return <Loading />

    }
    return (
        <div>

            <div>
                {
                    form.map(item => <FormCart key={item._id} item={item}></FormCart>)
                }
            </div>
        </div>
    );
};


export default MyCollage;