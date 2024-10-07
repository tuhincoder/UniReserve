import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import FormCart from "./FormCart";


const MyCollage = () => {

    const axiosPublic = useAxiosPublic()
    const { data: form = [], isLoading } = useQuery({
        queryKey: ['formData',],
        queryFn: async () => {
            const res = await axiosPublic.get('/form')
            return res.data
        }
    })
    // -------------


    if (isLoading) {
        return <p>Loading</p>
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