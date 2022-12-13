import React from 'react'

const SingleTeam = (props) => {
    const {img, name,title} = props.singleData;
    return (
        <>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 border-0" style={{ backgroundColor: 'green' }}>
                    <div className="card-body text-center">
                        <img src={img} className="w-100 rounded" alt=""/>
                        <h5 className="fw-bold text-white pt-2">{name}</h5>
                        <span className="">{title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTeam