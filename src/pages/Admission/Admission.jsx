import { LuArrowUpRight } from "react-icons/lu";
import Container from "../../component/common/Container";
import useColleges from "../../hook/useColleges";
import { Link } from "react-router-dom";
import Loading from "../../component/common/Loading";

const Admission = () => {
    const [colleges, isLoading] = useColleges()
    // console.log(colleges);

    if (isLoading) {
        return <Loading />
    }


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
                        {/* ---------- */}
                        <b> 1. Online Application: </b>
                        Prospective students must complete an online application form through the college&apos;s official website. This form usually collects personal information, academic background, and other relevant details.
                        Deadlines for submission vary, so it’s important to check the specific admission dates for each college.
                        <br />
                        <b>2. Submit Academic Transcripts: </b>
                        Applicants are required to submit official academic transcripts from previous institutions (high school or equivalent). These documents provide a record of academic performance.
                        <br />
                        <b> 3. Letters of Recommendation: </b>
                        Most colleges ask for 1-3 letters of recommendation from teachers, mentors, or employers who can vouch for the applicant’s academic abilities, character, and potential.
                        <br />
                        <b> 4. Standardized Test Scores :</b> (Optional or Required)
                        Some colleges require SAT, ACT, or other standardized test scores as part of the evaluation process, while others have adopted test-optional policies.
                        <br />
                        <b>5. Personal Statement or Essay: </b>
                        Many colleges ask for a personal essay or statement where applicants explain their goals, motivations for applying, and how they would contribute to the college community.
                        <br />
                        <b>  6. Extracurricular Activities:</b>
                        Colleges often consider an applicant’s involvement in extracurricular activities like clubs, sports, volunteer work, and leadership roles.
                        <br />
                        <b> 7. Interviews (Optional):</b>
                        Some colleges recommend or offer optional interviews to give applicants a chance to present themselves more personally and clarify points from their application.
                        <br />
                        <b>  8. Review Process: </b>
                        Once all materials are submitted, the admissions committee reviews the application holistically, considering academic achievements, extracurriculars, and personal statements.
                        <br />
                        <b> 9. Admission Decision:</b>
                        Applicants are notified of the college’s decision, typically through email or an online portal. Acceptance, rejection, or waitlist status is communicated at this stage.
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
                                <Link to={`/admissionForm/${colleges[0]._id}`}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 2 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[1].name}</h1>
                                    <p className="">{colleges[1].admission_process}</p>
                                </div>
                                <Link to={`/admissionForm/${colleges[1]._id}`}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[2].name}</h1>
                                    <p className="">{colleges[2].admission_process}</p>
                                </div>
                                <Link to={`/admissionForm/${colleges[2]._id}`}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[3].name}</h1>
                                    <p className="">{colleges[3].admission_process}</p>
                                </div>
                                <Link to={`/admissionForm/${colleges[3]._id}`}>
                                    <LuArrowUpRight className="text-5xl animate-pulse" />
                                </Link>
                            </div>
                            {/* 1 */}
                            <div className="border px-4 py-8 flex items-center justify-between hover:bg-[#001F3F] hover:text-white duration-1000 transition bg-gray-300 rounded" id="hover-bg">
                                <div className="w-3/4">
                                    <h1 className="text-2xl  font-medium hover:text-[#890c25] cursor-pointer">{colleges[4].name}</h1>
                                    <p className="">{colleges[4].admission_process}</p>
                                </div>
                                <Link to={`/admissionForm/${colleges[4]._id}`}>
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