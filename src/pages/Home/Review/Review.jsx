import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../../component/common/Container';

// import required modules
// import { Navigation } from 'swiper/modules';

const Review = () => {
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axiosPublic.get('/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [])

    return (
        <Container>
            <div>
                {
                    <div className="my-10 ">

                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                            {
                                reviews.map(review => <SwiperSlide key={review._id}>


                                    <div className="md:px-48 px-16 flex flex-col items-center space-y-4 py-3">
                                        <h2 className="text-xl md:text-3xl capitalize">Students think about us</h2>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <p className="">{review.details}</p>
                                        <p className='hidden md:block'>The admission process on UniRevers was straightforward and user-friendly. The clear instructions and helpful FAQs made it easy to navigate through the application steps. I appreciated the timely updates on my application status, which kept me informed and less anxious. Overall, a seamless experience!</p>
                                        <h2 className="text-xl text-[#890c25]">{review.name}</h2>
                                    </div>
                                </SwiperSlide>
                                )
                            }

                        </Swiper>

                    </div>
                }
            </div>
        </Container>
    );
};

export default Review;