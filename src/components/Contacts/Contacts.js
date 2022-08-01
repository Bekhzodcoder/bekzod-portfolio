import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './Contacts.css';
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Projects = () => {

    const [firstName , setFirstName] = useState('Bekhzod Istamov');
    const [email, setEmail] = useState('bexzodcoder@gmail.com');
    const [textarea, setTextarea] = useState('hello how are you my friend')

    return (
        <>
            <div className="contacts">
                <Container>
                    <div className='contacts_row'>
                        <div className='contacts_row-left'>
                            <h2>Contact Me</h2>
                            <h3>Reach out to me, 24/7</h3>
                            <div className='email'>
                                <p>Email Me:</p>
                                <h4><a href="mailto:">bexzodcoder@gmail.com</a></h4>
                            </div>
                            <div className='call'>
                                <p>Call Me:</p>
                                <h4>+998 91 440 88 70</h4>
                            </div>
                            <div className="icons">
                            <a href="https://www/t.me/Bekhzod_Istamov_0101"><BsTelegram /></a>
                            <a href="https://www.instagram.com/bekhzod_istamov/?hl=ru"><BsInstagram /></a>
                            <a href="https://github.com/Bekhzodcoder"><AiFillGithub size={'25px'} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100083769220646"><AiFillFacebook size={'25px'}/></a>
                            </div>
                        </div>
                        <div className='contacts_row-right'>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify = "true"
                                onSubmit = "submit"
                            >
                                <input 
                                type="text" 
                                placeholder='Your Name'
                                required
                                value={firstName} 
                                onChange={(e)=>setFirstName(e.target.value)}
                                name='name'/>

                                <input 
                                type="email" 
                                placeholder="Email Address"
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                name='email'/>

                                <textarea 
                                placeholder='Write message...' 
                                required
                                value={textarea}
                                onChange={(e)=>setTextarea(e.target.value)}
                                name='textarea'
                                />

                                <button type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Projects;