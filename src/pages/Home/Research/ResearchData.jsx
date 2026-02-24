/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResearchData = ({ item }) => {
  const { _id, image, name, description } = item || {};

  return (
    <div className="group h-full">
      <Link to={`/researchMore/${_id}`}>
        <div className="bg-white rounded-[2rem] border border-gray-100 hover:border-[#890c25]/20 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden">
          {/* Image Container - Responsive height */}
          <div className="p-4 md:p-5">
            <div className="relative overflow-hidden rounded-2xl h-48 md:h-56">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#890c25] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Publication
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 pb-8 pt-2 flex flex-col flex-grow text-left">
            <h2 className="text-xl md:text-2xl font-black text-gray-800 group-hover:text-[#890c25] transition-colors duration-300 leading-tight mb-4 tracking-tighter uppercase">
              {name}
            </h2>

            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>

            {/* Action Section */}
            <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-5">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Read Full Paper
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-[#890c25] group-hover:text-white transition-all duration-500">
                <BsArrowRight className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResearchData;
