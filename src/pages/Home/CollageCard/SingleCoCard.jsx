/* eslint-disable react/prop-types */
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
const SingleCoCard = ({ singleData }) => {
    const { image, name, admission_dates, events, research_history, sports, _id } = singleData || {};

    return (
        <div>
            <div className="card glass">
                <figure>
                    <img
                        className="w-full h-[320px] object-cover"

                        src={image}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <span className=" relative -mt-16 justify-center items-center flex bg-gray-300 px-3 right-0 text-end text-black h-[50px] shadow-inner shadow-transparent rounded-md">Admission Date: {admission_dates}</span>
                    <div className="">
                        <h2 className="text-xl capitalize text-center">{name}</h2>
                        <p></p>
                    </div>
                    <div className="text-sm text-gray-400 flex justify-between">
                        <div>
                            <h5 className="text-[#890c25] font-medium">Events:</h5>
                            <p >{events[0].event1}</p>
                            <p >{events[0].event2}</p>
                            <p >{events[0].event3}</p>
                        </div>
                        <div className="">
                            <h3 className="text-[#890c25] font-medium">Sports: </h3>
                            <p>{sports[0].sports1}</p>
                            <p>{sports[0].sports2}</p>
                            <p>{sports[0].sports3}</p>
                        </div>

                    </div>
                    <p>{research_history.length > 0 && research_history.slice(0, 100)}....</p>
                    <div className="card-actions justify-start rounded<MyCollage />">
                        <button className="border px-5 py-2">
                            <Link to={`/clgDetails/${_id}`}>
                                <GoArrowUpRight className="text-4xl font-bold animate-pulse" />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoCard;