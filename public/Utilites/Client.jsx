import React from 'react'
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Client = () => {
    return (
        <div>
            <Container className="text-center" data-aos="zoom-out">
                <div className="py-5">
                    <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView:1,
                            spaceBetween:10,
                        },
                        480: {
                            slidesPerView:3,
                            spaceBetween:10,
                        },
                        768: {
                            slidesPerView:5,
                            spaceBetween:10,
                        },
                      
                        1200: {
                            slidesPerView:6,
                            spaceBetween:10,
                        }
                    }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img src="image/clients/client-1.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-2.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-3.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-4.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-5.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-6.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-7.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="image/clients/client-8.png" className="img-fluid" style={{ width: 100 }} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </Container>
        </div>
    )
}

export default Client
