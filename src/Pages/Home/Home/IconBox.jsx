import React from 'react'
import { Container } from 'react-bootstrap'
import { BsEasel, BsGem, BsGeoAlt, BsCommand } from 'react-icons/Bs';
const IconBox = () => {
    return (
        <>
            <Container>
                <div className="row g-4 py-4 mt-4">
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card h-100 p-5 text-center" style={{ backgroundColor: 'rgb(53, 50, 50)' }}>
                            <div className="card-body text-white mt-4">
                                <h1><BsEasel /></h1>
                                <span className=""><a href="" className="stretched-link title">Lorem Ipsum</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card h-100 p-5 text-center" style={{ backgroundColor: 'rgb(53, 50, 50)' }}>
                            <div className="card-body text-white mt-4">
                                <h1><BsGem /></h1>
                                <span className=""><a href="" className="stretched-link title">Sed upiciatist pers</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card h-100 p-5 text-center" style={{ backgroundColor: 'rgb(53, 50, 50)' }}>
                            <div className="card-body text-white mt-4">
                                <h1><BsGeoAlt /></h1>
                                <span className=""><a href="" className="stretched-link title">Magni Dolores</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card h-100 p-5 text-center" style={{ backgroundColor: 'rgb(53, 50, 50)' }}>
                            <div className="card-body text-white mt-4">
                                <h1><BsCommand /></h1>
                                <span className=""><a href="" className="title">Nemo Enim</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default IconBox