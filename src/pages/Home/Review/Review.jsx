import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Container from "../../../component/common/Container";
import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const axiosPublic = useAxiosPublic();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosPublic.get("/review").then((res) => setReviews(res.data));
  }, [axiosPublic]);

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#890c25] font-black tracking-[0.2em] text-xs uppercase bg-[#890c25]/5 px-4 py-2 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-4 uppercase tracking-tighter">
            What Students <span className="text-[#890c25]">Think</span>
          </h2>
        </div>

        <div className="relative px-4 md:px-20">
          {/* Decorative Background Quote Icon */}
          <FaQuoteLeft className="absolute top-0 left-0 text-gray-100 text-9xl -z-10 opacity-50 hidden md:block" />

          <Swiper
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper !pb-10"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 md:space-y-8 py-6">
                  {/* Rating with Shadow */}
                  <div className="p-2 bg-white rounded-2xl shadow-sm border border-gray-50">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={review.rating}
                      readOnly
                    />
                  </div>

                  {/* Main Review Text */}
                  <p className="text-lg md:text-2xl font-medium text-gray-600 leading-relaxed italic px-4 md:px-0">
                    &ldquo;
                    {review.details ||
                      "The admission process on UniReserve was straightforward and user-friendly. I appreciated the timely updates on my application status."}
                    &rdquo;
                  </p>

                  {/* Student Info */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-1 bg-[#890c25] rounded-full mb-2"></div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 uppercase tracking-tight">
                      {review.name}
                    </h3>
                    <p className="text-[#890c25] font-bold text-xs uppercase tracking-[0.2em]">
                      Graduate Student
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Review;
