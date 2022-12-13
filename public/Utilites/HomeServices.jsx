import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HomeService from './HomeService';
const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='service-sec py-5'>
      <Container data-aos="fade-up">
        <div className="text-center">
          <h2 className='fw-bold'>Our Services</h2>
          <div className='section-header my-3'></div>
          <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        <div className="row g-3 pt-5">
          {
            services.map(items => <HomeService items={items} />)
          }
        </div>
      </Container>
    </div>
  )
}

export default HomeServices