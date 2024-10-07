import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SingleCoCard from "./SingleCoCard";
import Container from "../../../component/common/Container";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const CollageCard = () => {
    const axiosPublic = useAxiosPublic()

    // const [collageCard, setCollageCard] = useState([])
    // useEffect(() => {
    //     fetch('/read-college')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCollageCard(data)
    //         })
    //     console.log(collageCard);
    // }, [])

    const { data: collegeUniverse = [] } = useQuery({
        queryKey: ['college'],
        queryFn: async () => {
            const res = await axiosPublic.get('/read-college')
            return res.data;

        }
    })

    return (
        <Container>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        collegeUniverse.map(singleData => <SingleCoCard key={singleData.id} singleData={singleData}>

                        </SingleCoCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default CollageCard;