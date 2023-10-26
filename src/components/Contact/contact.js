import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import facebookIcon from '../../assets/facebookIcon.png'
import linkedInIcon from '../../assets/linkedInIcon.png'
import githubIcon from '../../assets/githubIcon.png'
import gfgIcon from '../../assets/gfgIcon.png'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Thanks for reaching me out.');
          document.getElementById('contactMe').reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form ref={form} id='contactMe' className='contactForm' onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name="from_name" id="from_name" required/>
                <input type='email' className='emailId' placeholder='Your Email' name="from_email" id="from_email" required/>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg' required/>
                <button type='submit' className='submitBtn' value='Send'>Submit</button>
                <div className='links'>
                    <button type='button' className='linkBtn' onClick={() => {
                      var url = "https://www.facebook.com/macky.verma.75/";
                      window.open(url)
                      }}><img src={facebookIcon} alt='Fb' className='link'></img></button>
                    <button type='button' className='linkBtn'onClick={() => {
                      var url = "https://github.com/mayank2345";
                      window.open(url)
                      }}><img src={githubIcon} alt='Github' className='link'></img></button>
                    <button type='button' className='linkBtn'onClick={() => {
                      var url = "https://www.linkedin.com/in/mayank-verma-11189411a/";
                      window.open(url)
                      }}><img src={linkedInIcon} alt='LinkedIn' className='link'></img></button>
                    <button type='button' className='linkBtn'onClick={() => {
                      var url = "https://auth.geeksforgeeks.org/user/mayankverma8";
                      window.open(url)
                      }}><img src={gfgIcon} alt='gfg' className='link'></img></button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
