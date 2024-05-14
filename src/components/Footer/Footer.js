import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container>
                    <div className='footer_content'>
                        <h1>BekhzodCoder</h1>      
                        <p>He lives in the Bukhara region of the Republic of Uzbekistan</p>
                        <div className='footer_icons'>
                            <a href="https://www/t.me/Bekhzod_Istamov_0101"><BsTelegram /></a>
                            <a href="https://www.instagram.com/bekhzod_istamov/?hl=ru"><BsInstagram /></a>
                            <a href="https://github.com/Bekhzodcoder"><AiFillGithub size={'25px'} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100083769220646"><AiFillFacebook size={'25px'}/></a>
                        </div>
                    </div>
                </Container>
        </footer>
        </>
    );
};


export default Footer;