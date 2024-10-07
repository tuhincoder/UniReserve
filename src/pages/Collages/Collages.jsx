// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hook/useAxiosPublic";
import CollegesCard from "./CollegesCard";
// import { useEffect, useState } from "react";
import Container from "../../component/common/Container";
import useColleges from "../../hook/useColleges";
import Loading from "../../component/common/Loading";

const Collages = () => {
    const [colleges, isLoading] = useColleges()

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <Container>

            <div className="my-10">
                <h2 className="text-gray-600 text-3xl text-center font-serif mb-7">All Colleges Here</h2>
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