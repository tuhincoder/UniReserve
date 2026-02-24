import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import FormCart from "./FormCart";
import useAuth from "../../hook/useAuth";
import Loading from "../../component/common/Loading";
import Container from "../../component/common/Container";

const MyCollage = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: form = [], isLoading } = useQuery({
    queryKey: ["formData", user?.email],
    enabled: !!user?.email, // Email thakle-i query cholbe
    queryFn: async () => {
      const res = await axiosPublic.get(`/form?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <section className="bg-gray-50/50 min-h-screen py-16">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#890c25] font-black tracking-[0.2em] text-[10px] uppercase bg-[#890c25]/5 px-4 py-2 rounded-full">
            User Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-4 uppercase tracking-tighter">
            My <span className="text-[#890c25]">Enrollments</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm font-medium italic">
            Manage and review your applied institutions
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {form.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {form.map((item) => (
                <FormCart key={item._id} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-20 rounded-[3rem] shadow-sm border border-dashed border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-300 uppercase tracking-widest">
                No Applications Found
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                You haven&apos;t applied to any colleges yet.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MyCollage;
