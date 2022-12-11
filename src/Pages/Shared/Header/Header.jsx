import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone, BsMessenger, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <section style={{ background: '#00796b', fontSize: 14, height: 40, transition: 'all 0.5' }}>
                <Container>
                    <div className='d-flex justify-content-between p-2 text-white'>
                        <div className='d-flex gap-4 align-items-center'>
                            <p><HiOutlineMail className='me-2' />contact@example.com</p>
                            <p><BsPhone />+1 5589 55488 55</p>
                        </div>
                        <div className='d-flex gap-4'>
                            <span><BsMessenger /></span>
                            <span><BsFacebook /></span>
                            <span><BsInstagram /></span>
                            <span><BsLinkedin /></span>
                        </div>
                    </div>
                </Container>
            </section>
            <header>
                <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" className="nav-menu pt-3">
                    <Container className='d-flex justify-content-between'>
                        <Navbar.Brand as={Link} to="/">
                            <h1 className='ms-2 fs-2'>Develop</h1>
                        </Navbar.Brand>
                        <div>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="ms-4">
                                <Nav className="fs-4 fw-bold me-2">
                                    <Nav.Link as={Link} to="/home" style={{fontSize:18}} className="active"><span className='menu'>Home</span></Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold me-2">
                                    <Nav.Link as={Link} to="/about" style={{fontSize:18}}>About</Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold me-2">
                                    <Nav.Link as={Link} to="/services" style={{fontSize:18}}>Services</Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold me-2">
                                    <Nav.Link as={Link} to="/portfolio" style={{fontSize:18}}>Portfolio</Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold me-2 ">
                                    <Nav.Link as={Link} to="/team" style={{fontSize:18}}>Team</Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold me-2">
                                    <Nav.Link as={Link} to="/blog"style={{fontSize:18}}>Blog</Nav.Link>
                                </Nav>
                                <Nav className="fs-4 fw-bold">
                                    <Nav.Link as={Link} to="/contact"style={{fontSize:18}}>Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header