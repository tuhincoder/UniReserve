
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


const ResearchData = ({ item }) => {
    const { _id, image, name, description, } = item || {};
    return (
        <div>
            <Link to={`/researchMore/${_id}`}>
                <div className="card bg-base-100  border">
                    <figure className="px-10 pt-10">
                        <img
                            src={image} alt="Shoes"
                            className="rounded-xl w-full h-[250px]" />
                    </figure>
                    <div className="card-body items-center ">
                        <h2 className="card-title hover:text-[#890c25] font-serif">{name}</h2>
                        <p className="text-gray-500">{description.length > 0 && description.slice(0, 200)}</p>
                        <div className="card-actions">

                            <h2 className=" px-10">
                                <BsArrowRight className="text-2xl animate-pulse" />
                            </h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ResearchData;