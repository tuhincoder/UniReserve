import { useQuery } from "@tanstack/react-query";
import SingleCoCard from "./SingleCoCard";
import Container from "../../../component/common/Container";
import useAxiosPublic from "../../../hook/useAxiosPublic";

const CollageCard = () => {
  const axiosPublic = useAxiosPublic();

  const { data: collegeUniverse = [], isLoading } = useQuery({
    queryKey: ["college"],
    queryFn: async () => {
      const res = await axiosPublic.get("/read-college");
      return res.data;
    },
  });

  return (
    <Container>
      <div className="mt-16 mb-20">
        {/* Modern Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[#890c25] font-bold tracking-[0.2em] text-sm uppercase">
            Explore More
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-2">
            Discover Other <span className="text-[#890c25]">Colleges</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#890c25] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Loading State / Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-64 w-full rounded-2xl"></div>
                <div className="skeleton h-6 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Actual Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__fadeIn">
            {collegeUniverse.map((singleData) => (
              <SingleCoCard key={singleData._id} singleData={singleData} />
            ))}
          </div>
        )}

        {/* Empty State (Optional) */}
        {!isLoading && collegeUniverse.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <p className="text-gray-500 font-medium italic">
              No colleges found at the moment.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CollageCard;
