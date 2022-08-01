import React from 'react';
import './Home.css'
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import BekhzodLogo from '../img/bekhzodLogo.jpg';
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='home'>
                <Container>
                    <div className='home_content'>
                        <div className='home_img'>
                            <img src={BekhzodLogo} className='img-fluid' />
                        </div>
                        <h1>Bekhzod Istamov</h1>
                        <div className="typewriper">
                            <h4>I know these technologies:</h4>
                            <p>
                                <Typewriter 
                                    options ={{
                                        strings:['HTML5', 'Css3','bootstrap', 'JavaScript', 'ReactJs', 'Reactstrapt', 'sass/scss', 'git/github', 'BEM', 'React-router-dom'],
                                        autoStart:true,
                                        loop:true
                                    }}
                                />
                            </p>
                        </div>
                            <div className='home_icons'>
                            <a href="https://www/t.me/Bekhzod_Istamov_0101"><BsTelegram /></a>
                            <a href="https://www.instagram.com/bekhzod_istamov/?hl=ru"><BsInstagram /></a>
                            <a href="https://github.com/Bekhzodcoder"><AiFillGithub size={'25px'} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100083769220646"><AiFillFacebook size={'25px'}/></a>
                            </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;