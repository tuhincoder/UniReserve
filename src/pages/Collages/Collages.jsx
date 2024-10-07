import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import CollegesCard from "./CollegesCard";
import { useEffect, useState } from "react";
import Container from "../../component/common/Container";

const Collages = () => {
    const axiosPublic = useAxiosPublic()
    const [colleges, setColleges] = useState([])
    // const { data: colleges = [] } = useQuery({
    //     queryKey: ['anotherColleges'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('anotherCollege.json')
    //         return res.data;
    //     }
    // })

    useEffect(() => {
        fetch('anotherCollege.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setColleges(data)
            })
    }, [])

    return (
        <Container>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        colleges.map(college => <CollegesCard key={college._id}
                            college={college}
                        ></CollegesCard>)
                    }
                </div>
            </div>
        </Container>

    );
};

export default Collages;