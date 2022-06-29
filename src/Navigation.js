import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import logo1 from './images/9044.svg'
import './Navigation.css'

const Navigation = () => {
  return (
<>
  <Navbar className='px-5' bg="primary" variant="light">
    <Container className='container'>
    <Navbar.Brand href="#home"> <img src= {logo1} alt='image'/></Navbar.Brand>
    <Nav className="me-auto px-3">
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}} href="#home" variant= 'light'>Home</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}} href="#features">About Us</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}}  href="#pricing">How it Works</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}} href="#features">Affiliate</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}} href="#features">Coupon Vendor</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}} href="#features">FAQs</Nav.Link>
      <Nav.Link style={{color: 'white', padding: '10px 20px', textAlign: 'center'}}  href="#features">Contact</Nav.Link>
    </Nav>
    </Container>
    <>
    <div className="Navbutton">
    {/* <Button id='Navlogin' className='btn btn-outline-danger' href="#">Login</Button> */}
   <Button id='Navlogin' className='btn' type="submit">Login</Button>
   <Button id='Navstart' className='btn btn-warning' type="submit">Get Started</Button>
  
    </div>

 
</>
  </Navbar>
</>
      
  )
}

export default Navigation