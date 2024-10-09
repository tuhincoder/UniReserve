import { useLoaderData } from "react-router-dom";
import Container from "../../component/common/Container";
import { BsArrow90DegRight } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import bgImg from '../../assets/graduate/graduate3.jpg'

const CollegesDetails = () => {
    const { image, events, event_details, coast, admission_dates } = useLoaderData()
    console.log(events[0]);
    return (
        <Container>
            <h2 className="text-2xl  text-center font-bold font-serif mt-4 ">College Details Event</h2>
            <div className="grid grid-cols-12 gap-4  mb-96 mt-5">
                <div className="col-span-8 p-3 ">
                    <img
                        className="h-1/2 object-cover w-full p-2"
                        src={image} alt="" />

                    <div>
                        <h1 className="text-3xl text-gray-700 font-serif my-2">About The Event</h1>
                        <p>{event_details} Join us for our Annual Cultural Festival, celebrating diversity through art, music, and dance. Enjoy performances from talented students and local artists, alongside food stalls offering delicious cuisines. Participate in interactive workshops and showcase your creativity in various competitions. Don’t miss the chance to connect with peers and experience the vibrant college community. Mark your calendars for an unforgettable day of culture and camaraderie!</p>
                        <div>
                            {/* 1 */}
                            <div className="flex items-center space-y-5">
                                <BsArrow90DegRight className="text-5xl font-bold" />

                                <div className="ml-5">
                                    <p className="text-3xl">{events[0].event1}</p>
                                    <p><b>Description:</b> Orientation Week is designed to help new students acclimate to college life. It includes a series of informative sessions, campus tours, and social activities that promote engagement among students and faculty.
                                        <br />
                                        <b>Activities:</b> Campus tours, welcome speeches from faculty, informational booths, icebreaker games, and social mixers.
                                        <br />
                                        <b>Purpose:</b> To familiarize students with the college environment, resources, and support systems available to them.</p>
                                </div>

                            </div>
                            {/* 2 */}
                            <div className="flex items-center space-y-5">
                                <BsArrow90DegRight className="text-5xl font-bold" />

                                <div className="ml-5">
                                    <p className="text-3xl">{events[0].event2}</p>
                                    <p><b>Description:</b> The Annual Cultural Festival celebrates the diverse cultures represented in the college community through art, music, and food. It serves as a platform for students to express their creativity and learn about different cultures.
                                        <br />
                                        <b>Activities:</b>  Dance and music performances, art exhibitions, food stalls featuring international cuisines, and cultural workshops.
                                        <br />
                                        <b>Purpose:</b> To promote cultural awareness, unity, and appreciation among students while providing entertainment and learning opportunities.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    {/* 1 */}
                    <div className="bg-gray-300 h-[350px] py-10 rounded hover:bg-[#890c25] duration-700 transition hover:text-white px-5 mt-5 space-y-4">
                        <h2 className="font-bold text-gray-500">INFORMATION</h2>
                        <div>
                            <h4 className="font-bold">Date & Time:</h4>
                            <p>{admission_dates}</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Coast:</h4>
                            <p className="text-lg">${coast}</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Categories:</h4>
                            <a href="" className="underline text-green-700">{events[0].event1}</a>
                            <a href="" className="underline text-green-700 mx-2">{events[0].event2}</a>
                            <a href="" className="underline text-green-700">{events[0].event3}</a>
                        </div>

                    </div>
                    {/* 2 */}
                    <div className="bg-gray-300 h-[500px] py-10 rounded hover:bg-[#890c25] duration-700 transition text-white px-5 mt-5 space-y-10 text-stone-950-800" style={{ backgroundImage: `url(${bgImg}) ` }}>
                        <h2 className="font-bold text-xl md:text-2xl text-center">Join New Event About Bangladesh History</h2>
                        <h2 className="text-lg md:text-2xl text-center">H.S.C. In Bangladesh Studies</h2>
                        <div className="">
                            <h4 className="font-bold text-center">Date & Time:</h4>

                            <p className="flex items-center justify-center"><IoTimeOutline className="mr-2" />10:30 am</p>
                        </div>
                        <div className="text-center">
                            <b>Location:</b> Bangladesh
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold">Categories:</h4>
                            <a href="" className="underline text-green-700">{events[0].event1}</a>
                            <a href="" className="underline text-green-700 mx-2">{events[0].event2}</a>
                            <a href="" className="underline text-green-700">{events[0].event3}</a>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CollegesDetails;