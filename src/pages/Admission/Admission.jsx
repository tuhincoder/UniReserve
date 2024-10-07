import { LuArrowUpRight } from "react-icons/lu";
import Container from "../../component/common/Container";
import useColleges from "../../hook/useColleges";
import { Link } from "react-router-dom";

const Admission = () => {
    const [colleges] = useColleges()


    // style


    return (
        <div >
            <Container>
                <div className="flex flex-col lg:flex-row my-10">
                    <div className="flex-1  px-5">
                        <h2 className="text-3xl uppercase text-gray-500">Admission</h2>
                        <p className="text-gray-500">College Admission Details
                            The college admission process allows students to easily apply to their preferred colleges through a user-friendly online system. The admission period typically begins after the SSC results are announced, with specific application start and deadline dates provided for each college. Applicants are required to provide their full name, subject of interest, email, phone number, address, date of birth, and upload a recent photograph during the application process.
                            <br />
                            Once the candidate submits their application, all the relevant information will be stored in the “My College” section of the website, where students can view their selected college details. Additionally, after completing the admission process, students will have the opportunity to provide a review of the college. This review, along with a rating, will be displayed on the homepage under the reviews section, helping future applicants make informed decisions.</p>
                    </div>
                    <div className="flex-1 " >
                        {/* -------- */}
                        <div className="space-y-3">
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded " id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[0].name}</h1>
                                    <p className="">{colleges[0].admission_process}</p>
                                </div>
                                <Link to={``}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 2 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[1].name}</h1>
                                    <p className="">{colleges[1].admission_process}</p>
                                </div>
                                <Link to={``}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[2].name}</h1>
                                    <p className="">{colleges[2].admission_process}</p>
                                </div>
                                <Link to={``}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[3].name}</h1>
                                    <p className="">{colleges[3].admission_process}</p>
                                </div>
                                <Link to={``}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[4].name}</h1>
                                    <p className="">{colleges[4].admission_process}</p>
                                </div>
                                <Link to={``}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Admission;