import { MdArrowOutward } from "react-icons/md";
import Container from "../../../component/common/Container";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import ResearchData from "./ResearchData";
import { useQuery } from "@tanstack/react-query";

const Research = () => {
  const axiosPublic = useAxiosPublic();
  const { data: researches = [], isLoading } = useQuery({
    queryKey: ["research"],
    queryFn: async () => {
      const res = await axiosPublic.get("/research");
      return res.data;
    },
  });

  return (
    <section className="py-12 md:py-20 bg-white">
      <Container>
        {/* Header Section - Mobile e column hobe, items start hobe */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-end justify-between mb-12 md:mb-16">
          <div className="flex-1 w-full">
            <span className="text-[#890c25] font-black tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3 md:mb-4 block">
              Academic Excellence
            </span>
            {/* Font size responsive kora hoyeche: text-3xl (mobile) theke text-6xl (desktop) */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] lg:leading-[0.9] tracking-tighter uppercase">
              PUBLICATION & <br />
              <span className="text-gray-300">RESEARCH.</span>
            </h2>
          </div>

          <div className="flex-1 w-full space-y-4 md:space-y-6">
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium max-w-2xl">
              Dive into the vast array of research papers and journals published
              by our distinguished faculty and students. Explore specializations
              that ignite intellectual curiosity.
            </p>
            <button className="group flex items-center gap-2 text-[#890c25] font-black text-xs md:text-sm uppercase tracking-widest border-b-2 border-[#890c25]/20 pb-2 hover:border-[#890c25] transition-all">
              Explore All Papers
              <MdArrowOutward className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-lg md:text-xl" />
            </button>
          </div>
        </div>

        {/* Content Grid - Responsive gap handle kora hoyeche */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-60 md:h-64 bg-gray-50 rounded-2xl md:rounded-3xl animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {researches.map((item) => (
              <ResearchData key={item._id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Research;
