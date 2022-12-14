import React from 'react'

const SingleTeam = (props) => {
    const { img, name, title } = props.singleData;
    return (
        <>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 border-0" style={{ backgroundColor: 'green' }}>
                    <div className="card-body text-center">
                        <img src={img} className="w-100 rounded" alt="" />
                        <h5 className="fw-bold text-white pt-2">{name}</h5>
                        <span className="">{title}</span>
                        <div className='py-2'>
                            <a className="border rounded-circle" href="#"><img src="https://img.icons8.com/color/24/null/twitter--v1.png"/></a>
                            <a className="border rounded-circle ms-2" href="#"><img src="https://img.icons8.com/color/24/null/facebook-new.png"/></a>
                            <a className="border rounded-circle ms-2" href="#"><img src="https://img.icons8.com/color/24/null/instagram-new--v1.png"/></a>
                            <a className="border rounded-circle ms-2" href="#"><img src="https://img.icons8.com/ios-glyphs/24/null/linkedin-circled--v1.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTeam