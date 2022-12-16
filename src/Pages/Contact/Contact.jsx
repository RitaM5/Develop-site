import React from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'
const Contact = () => {
  return (
    <div className='mt-5'>
      <Container className='py-4'>
        <div className='py-5 mt-5'>
          <div className="text-center">
            <h2 className='fw-bold'>Contact</h2>
            <div className='section-header my-3'></div>
            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-4">

            <div className="info-container d-flex flex-column align-items-center justify-content-center bg-primary text-white p-4 rounded-4 gap-2">
              <div className="info-item d-flex bg-dark p-2 rounded justify-content-center w-100">
                <div className='pt-1'>
                  <img className='bg-white rounded-5' src="https://img.icons8.com/ios/35/null/marker--v1.png" />
                </div>
                <div className='px-2'>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="info-item d-flex p-2 bg-dark rounded w-100">
                <div className='pt-1'>
                  <img className='bg-white rounded-5' src="https://img.icons8.com/material-outlined/35/null/new-post.png" />
                </div>
                <div className='px-2'>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div>

              <div className="info-item d-flex p-2 bg-dark p-2 rounded w-100">
              <div className='pt-1'>
              <img className='bg-white rounded-5' src="https://img.icons8.com/material-outlined/35/null/iphone--v1.png"/>
                </div>
                <div className='px-2'>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="info-item d-flex bg-dark p-2 rounded w-100">
                <div className='pt-1'>
                <img className='bg-white rounded-5' src="https://img.icons8.com/windows/35/null/clock--v1.png"/>
                </div>
                <div className='px-2'>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 pt-4">
            <form action="forms" method="post" role="form" className="">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div class="form-group mt-3">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <div className="text-center pt-5"><button className='rounded-5 text-white px-4 border-0 p-2 bg-primary' type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact