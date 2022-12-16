import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HomeServices from '../../../public/Utilites/HomeServices'
import './Services.css'
import Testimonial from './Testimonial'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch('Testimonial.json')
      .then(res => res.json())
      .then(data => setTestimonial(data))
  }, [])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='py-5'>
      <HomeServices />
      <Container className=''>
        <div className="text-center">
          <h2 className='fw-bold'>Testimonials</h2>
          <div className='section-header my-3'></div>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>
      </Container>
      <section className='silks py-5 mt-5'>
        <Container  data-aos="fade-up" data-aos-delay="100">
          <div className="p-4 py-5">
            <Slider {...settings}>
              {
                testimonial.map(testData => <Testimonial testData={testData} key={testimonial.id} />)
              }
            </Slider>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Services
