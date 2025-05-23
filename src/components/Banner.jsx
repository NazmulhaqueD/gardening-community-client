import React from 'react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {

    return (
        <div className='rounded-2xl my-8 md:my-16'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 }
                }}
            >
                <SwiperSlide>
                    <div className='bg-[url(https://i.postimg.cc/MTNtBJN8/istockphoto-1470970496-2048x2048.jpg)] bg-cover bg-center h-[60vh] flex justify-center items-center rounded-2xl shadow-2xl'>
                        <div className='p-8 text-center space-y-3'>
                            <h1 className='text-white font-bold text-3xl md:text-6xl'>Grow Your Dream Garden</h1>
                            <p className='text-xl text-white'>We help you create a green space that brings peace and joy.</p>
                            <button className='btn btn-primary'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://i.postimg.cc/0yqsRLtj/premium-photo-1681909647499-603f9a685cf4.avif)] bg-cover bg-center h-[60vh] flex justify-center items-center rounded-2xl shadow-2xl'>
                        <div className='p-8 text-center space-y-3'>
                            <h1 className='text-white font-bold text-3xl md:text-6xl'>Grow Your Dream Garden</h1>
                            <p className='text-xl text-white'>We help you create a green space that brings peace and joy.</p>
                            <button className='btn btn-primary'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://i.postimg.cc/DfJ023cP/kadri-karmo-q-Lf-GWT-Mm6k-unsplash.jpg)] bg-cover bg-center h-[60vh] flex justify-center items-center rounded-2xl shadow-2xl'>
                        <div className='p-8 text-center space-y-3'>
                            <h1 className='text-white font-bold text-3xl md:text-6xl'>Grow Your Dream Garden</h1>
                            <p className='text-xl text-white'>We help you create a green space that brings peace and joy.</p>
                            <button className='btn btn-primary'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://i.postimg.cc/g07p5r1F/sandie-clarke-q13-Zq1-Jufks-unsplash.jpg)] bg-cover bg-center h-[60vh] flex justify-center items-center rounded-2xl shadow-2xl'>
                        <div className='p-8 text-center space-y-3'>
                            <h1 className='text-white font-bold text-3xl md:text-6xl'>Grow Your Dream Garden</h1>
                            <p className='text-xl text-white'>We help you create a green space that brings peace and joy.</p>
                            <button className='btn btn-primary'>Explore</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;