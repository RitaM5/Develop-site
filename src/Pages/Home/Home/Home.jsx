import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { BsPlayCircle } from 'react-icons/bs';
import './Home.css'
import IconBox from './IconBox';
const Home = () => {
  return (
    <>
      <div className='home-section'>
        <Container>
          <div className="row gy-5 align-items-center" data-aos='fade-in'>
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className='text-white fs-1 fw-bold'>Welcome to <span>Impact</span></h2>
              <p className="text-white">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
              <div className='d-flex gap-3 pt-3 py-3'>
                <Button href="#about" variant='outline-secondary ' className="btn btn-get-started text-white px-4 p-2 rounded-5 border-white">Get Started</Button>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="btn text-white glightbox btn-watch-video d-flex align-items-center "><span className='me-2 fs-5'><BsPlayCircle /></span>Watch Video</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="image/hero-img.svg" className="pt-4 img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
          </div>
        </Container>
      </div>
      <IconBox/>
    </>
  )
}

export default Home