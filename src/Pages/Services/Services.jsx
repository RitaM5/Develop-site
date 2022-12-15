import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HomeServices from '../../../public/Utilites/HomeServices'
import './Services.css'
import Testimonial from './Testimonial'
const Services = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch('Testimonial.json')
      .then(res => res.json())
      .then(data => setTestimonial(data))
  }, [])
  return (
    <div className='py-5'>
      <HomeServices />
      <Container>
        <div className="text-center">
          <h2 className='fw-bold'>Testimonials</h2>
          <div className='section-header my-3'></div>
          <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
        </div>
        <div className="row py-4 mt-5">
          {
            testimonial.map(testData => <Testimonial testData={testData} key={testimonial.id}/>)
          }
        </div>
      </Container>
    </div>
  )
}

export default Services
