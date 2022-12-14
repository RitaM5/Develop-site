import React from 'react'
import { Container } from 'react-bootstrap'
import HomeAbout from '../../../public/Utilites/HomeAbout'
import './About.css'
const About = () => {
  return (
    <>
      <HomeAbout />
      {/* Frequently Asked Questions Section */}
      <Container className='py-5'>
        <div className="row">
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p style={{ fontSize: 14 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <div className="accordion-item ">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span className="num">1.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h3>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <span className="num">2.</span>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                  </button>
                </h3>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    <span className="num">3.</span>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                  </button>
                </h3>
                <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <span className="num">4.</span>
                    Non consectetur a erat nam at lectus urna duis?
                  </button>
                </h3>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    <span className="num">5.</span>
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                  </button>
                </h3>
                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About