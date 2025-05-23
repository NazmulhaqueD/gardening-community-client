import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    console.log(feedbacks)

    useEffect(() => {
        fetch('http://localhost:5000/feedBack')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data);
            })
    }, [])

    return (
        <div>
            <h1 className='text-center text-4xl py-8 text-green-500 font-bold'>What Our Users Say</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper py-8 px-2"
            >
                {feedbacks.map((feedback, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-base-100 p-6 rounded-xl shadow-md text-center space-y-4 inset-shadow-sm inset-shadow-indigo-500">
                            <img
                                src={feedback.photo}
                                alt={feedback.name}
                                className="w-56 h-56 rounded-full mx-auto"
                            />
                            <h3 className="text-2xl font-bold">{feedback.name}</h3>
                            <p className="text-gray-500 text-sm">{feedback.date}</p>
                            <p className="text-center">{feedback.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Feedback;