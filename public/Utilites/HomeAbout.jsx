import React from 'react'
import { Container } from 'react-bootstrap'
import { HiCheckCircle } from 'react-icons/hi';
const HomeAbout = () => {
    return (
        <div className='about mt-5'>
            <Container className='pt-5' data-aos="fade-up">
                <div className="text-center">
                    <h2 className='fw-bold'>About Us</h2>
                    <div className='section-header my-3'></div>
                    <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                </div>
                <div className="row py-5 p-4">
                    <div className="col-lg-6">
                        <h4 className='fw-bold'>Voluptatem dignissimos provident quasi corporis</h4>
                        <img src="image/about.jpg" className='img-fluid rounded-4 mb-4 my-2' alt="" />
                        <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                        <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                    </div>
                    <div className="col-lg-6">
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className=''>
                            <p className=''><HiCheckCircle className='fs-5' /><span className='ms-2'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
                            <p><HiCheckCircle className='fs-5' /><span className='ms-2'>Duis aute irure dolor in reprehenderit in voluptate velit.</span></p>
                            <p><HiCheckCircle className='fs-5' /><span className='ms-2'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
                        </div>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                        </p>
                        <div className="position-relative mt-4">
                            <img src="image/about-2.jpg" className="img-fluid rounded-4" alt="" />
                            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeAbout