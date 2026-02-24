import CollegesCard from "./CollegesCard";
import Container from "../../component/common/Container";
import useColleges from "../../hook/useColleges";
import Loading from "../../component/common/Loading";

const Collages = () => {
  const [colleges, isLoading] = useColleges();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#890c25] font-black tracking-[0.2em] text-[10px] md:text-xs uppercase bg-[#890c25]/5 px-4 py-2 rounded-full inline-block mb-4">
            Academic Directory
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
            Explore All <span className="text-[#890c25]">Colleges.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base font-medium px-4">
            Discover the perfect institution for your future. Browse through our
            extensive list of partner colleges and find your ideal match.
          </p>
        </div>

        {/* Grid Layout - Optimized for Mobile to Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {colleges.map((college) => (
            <CollegesCard key={college._id} college={college} />
          ))}
        </div>

        {/* Empty State (Optional) */}
        {colleges.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-medium">
              No colleges found at the moment.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Collages;
