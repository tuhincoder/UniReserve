import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SingleCoCard from "./SingleCoCard";
import Container from "../../../component/common/Container";

const CollageCard = () => {

    const [collageCard, setCollageCard] = useState([])
    useEffect(() => {
        fetch('college.json')
            .then(res => res.json())
            .then(data => {
                setCollageCard(data)
            })
        console.log(collageCard);
    }, [])

    return (
        <Container>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        collageCard.map(singleData => <SingleCoCard key={singleData.id} singleData={singleData}>

                        </SingleCoCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default CollageCard;