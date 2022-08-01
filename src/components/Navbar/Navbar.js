import React, {useState} from 'react';
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import './Navbar.css'
import {
    BrowserRouter as Router,
    Route, 
    Routes,
    NavLink
} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Contacts/Contacts';
import Portfolio from '../Portfolio/Portfolio';
import Match from '../Match/Match';
import { AiOutlineCloudDownload } from "react-icons/ai";


const NavbarComp = () => {
    const [navbar, setNavbar] = useState(false)

    
    const navbarFixed = ()=>{
        if(window.scrollY < 0){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', navbarFixed);
    
    const styleH1 ={
        color:'#fff'
    }

    return (
       
      <>
        <Router>
            <Navbar className={navbar ? 'navbar active': 'navbar'} expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <h1 className='logo'>B.</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle style={styleH1} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav navbar_collap">
                        <Nav className="mx-auto">
                            <Nav.Link style={styleH1} as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link style={styleH1} as={NavLink} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link style={styleH1} as={NavLink} to="/contacts">Contacts</Nav.Link>

                        </Nav>
                      <div className="download">
                        <a href="../resume.pdf" download>
                            <AiOutlineCloudDownload size={'29px'} />
                            <p>Resume</p>
                        </a>
                      </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contacts" element={<Projects />} />
                <Route path='*' element={<Match />} />
            </Routes>
        </Router>
      </> 
       
     
    );
};
export default NavbarComp;