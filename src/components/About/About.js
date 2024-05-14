import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import AboutAvatar from '../img/avatar.png';




const About = () => {

    return (
        <>
            <div className="about">
                <Container>
                    <div className='about_row'>
                        <h4>About</h4>
                        <h5>Few things about me</h5>
                        <div className='about_content'>
                            <div className='about_col-left'>
                                <div className='about_col-left-text'>
                                    <p>I graduated from Istamov Behzod State University, Department of Information Technologies, Department of Information Systems and Technologies. HTML5, Css3, git/github, sass/scss , javascript, reactjs, redux, reactstrapt, API, bootstrap5 I have two and a half years of experience</p>
                                </div>
                                <div className='about_texnology'>
                                    <h3>Skills</h3>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>Css3</li>
                                        <li>bootstrap5</li>
                                        <li>JavaScript</li>
                                        <li>ReactJs</li>
                                        <li>Redux</li>
                                        <li>Reactstrapt</li>
                                        <li>sass/scss</li>
                                        <li>git/github</li>
                                        <li>BEM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='about_img'>
                                <img className='img-fluid' src={AboutAvatar} alt='logo' />
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default About;