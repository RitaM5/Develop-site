import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { MdPlayCircleFilled } from 'react-icons/md';
import Client from '../../../../public/Utilites/Client';
import HomeAbout from '../../../../public/Utilites/HomeAbout';
import HomeServices from '../../../../public/Utilites/HomeServices';
import Team from '../../Team/Team';
import './Home.css'
import IconBox from './IconBox';
const Home = () => {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  const toggleTheme = (theme) => {
    if (theme === "dark-theme") {
      setTheme('light-theme');
    }
    else {
      setTheme('dark-theme');
    }

  }
  return (
    <>
      <div className='home-section'>
        <Container className='py-5'>
          <div className="row gy-5 align-items-center pt-4" data-aos='fade-in'>
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className='text-white fs-1 fw-bold'>Welcome to <span>Impact</span></h2>
              <p className="text-white">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
              <div className='d-flex pt-3 py-3 g-2 align-items-center'>
                <Button href="#about" variant='outline-secondary ' className="btn btn-get-started text-white px-4  rounded-5 border-white">Get Started</Button>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="btn text-white glightbox btn-watch-video d-flex align-items-center "><span className='me-2 fs-5'></span><MdPlayCircleFilled />Watch Video</a>
                <Button href="#about" variant='outline-secondary ' className="btn btn-get-started text-white px-4 rounded-5 border-white" onClick={() => toggleTheme(theme)}>Theme</Button>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="image/hero-img.svg" className="pt-4 img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
          </div>
        </Container>
      </div>
      <IconBox />
      <HomeServices />
      <HomeAbout />
      <Client />
      <Team />
    </>
  )
}

export default Home