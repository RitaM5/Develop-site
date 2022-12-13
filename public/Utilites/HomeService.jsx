import React from 'react'

const HomeService = (props) => {
    console.log(props);
    const{id,title,details,icon} = props.items;
    return (
        <>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 border-0 p-4" style={{ backgroundColor: '#fff' }}>
                    <div className="card-body">
                        <img className='py-3' src={icon} alt=""/>
                        <h5 className='fw-bold'>{title}</h5>
                        <div className='title-border'></div>
                        <p className='py-3' style={{fontSize:14}}>{details}</p>
                        <a href="#" className="readmore stretched-link py-3">Read more<img className="ms-2"src="https://img.icons8.com/material-two-tone/24/null/long-arrow-right.png"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService