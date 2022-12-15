import React from 'react'

const Testimonial = (props) => {
    const { id, name, title, details, img } = props.testData;
    return (
        <>
            <div className="col-lg-4 gy-2">
                <div className="card h-100 border-0" style={{ backgroundColor:'yellowgreen' }}>
                    <div className="card-body text-center">
                        <div className='d-flex gap-3 align-items-center'>
                            <img src={img} style={{width:65, height:65}} className="rounded-5" alt="" />
                            <div className='text-start'>
                                <h5 className="fw-bold text-white pt-2">{name}</h5>
                                <span className="">{title}</span>
                            </div>
                        </div>
                        <p className='pt-4 text-start'>{details}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial