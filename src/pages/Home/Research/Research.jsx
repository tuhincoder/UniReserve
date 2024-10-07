import { MdArrowOutward } from "react-icons/md";
import Container from "../../../component/common/Container";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import ResearchData from "./ResearchData";
import { useQuery } from "@tanstack/react-query";


const Research = () => {
    // const [research, setResearch] = useState([])
    const axiosPublic = useAxiosPublic()
    const { data: researches = [] } = useQuery({
        queryKey: ['research'],
        queryFn: async () => {
            const res = await axiosPublic.get('/research')
            return res.data;
        }
    })






    return (
        <Container>
            <div>
                {/* ------- */}
                <div className="flex flex-col md:flex-row  text-gray-700 justify-between  mb-2 ">
                    <h2 className="md:text-4xl text-xl font-serif flex-1">PUBLICATION & <br /> RESEARCH</h2>
                    <p className="flex-1">Dive Into The Vast Array Of Courses Offered At Our University, Spanning Across 10+ Specializations. Embrace An Educational Journey That Ignites Intellectual Curiosity And Nurtures Intuitive Learning Among Our Students.
                        <br />
                        <button className="text-[#890c25] flex items-center text-xl underline underline-offset-4">
                            View All
                            <MdArrowOutward className="underline" />
                        </button>
                    </p>
                </div>
                {/* ---------- */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            researches.map(item => <ResearchData key={item._id}
                                item={item}
                            ></ResearchData>)
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Research;