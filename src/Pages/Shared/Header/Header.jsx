import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone, } from 'react-icons/fi';
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
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
            <div>
                <div className="row fixed-top">
                    <div className='col-lg-12 sticky-sec' style={{ backgroundColor: 'gray', fontSize: 14, height: 40, transition: 'all 0.5' }}>
                        <Container>
                            <div className=' container d-flex justify-content-between p-2 text-white'>
                                <div className='d-flex gap-4 align-items-center'>
                                    <p><HiOutlineMail className='me-2' />contact@example.com</p>
                                    <p><FiPhone />+1 5589 55488 55</p>
                                </div>
                                <div className='d-flex gap-4'>
                                    <a href='/#' className='text-white fs-6'><FaFacebookMessenger /></a>
                                    <a href='/#' className='text-white fs-6'><FaFacebook /></a>
                                    <a href='/#' className='text-white fs-6'><FaInstagram /></a>
                                    <a href='/#' className='text-white fs-6'><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className='col-lg-12'>
                        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-menu header">
                            <Container>
                                <Navbar.Brand>
                                    <h1 className=' fs-2'>Develop</h1>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav" className="ms-auto" >
                                    <Nav className=" ms-auto fs-4 fw-bold me-2">
                                        <Nav.Link as={Link} to="/home" style={{ fontSize: 18 }} className="active"><span className='menu'>Home</span></Nav.Link>
                                        <Nav.Link as={Link} to="/about" style={{ fontSize: 18 }}><span className='menu'>About</span></Nav.Link>
                                        <Nav.Link as={Link} to="/services" style={{ fontSize: 18 }}><span className='menu'>Services</span></Nav.Link>
                                        <Nav.Link as={Link} to="/team" style={{ fontSize: 18 }}><span className='menu'>Team</span></Nav.Link>               
                                        <Nav.Link as={Link} to="/contact" style={{ fontSize: 18 }}><span className='menu'>Contact</span></Nav.Link>
                                        <p className='ms-5 pt-1'><Button href="#about" variant='outline-secondary ' className="btn btn-get-started text-white rounded-5 border-white text-center" onClick={() => toggleTheme(theme)}>Theme</Button></p>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
/* 
<Nav.Link as={Link} to="/blog" style={{ fontSize: 18 }}><span className='menu'>Blog</span></Nav.Link>


*/