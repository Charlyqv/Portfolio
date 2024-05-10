import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import "./contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7o14tzw', 'template_o5cvymu', form.current, {
        publicKey: '3NLl0HLt1GpFHZ_Pi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <main className="section container animate__animated animate__zoomIn">
      <section className='contact'>
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            {/* <h3 className="contact__title">Don't be Shy !</h3> */}
            <p className="contact__description">Looking for freelance support? Your search 
              ends here! With expertise spanning diverse fields, I provide customized solutions 
              to meet your requirements. From content creation to web development, I'm dedicated
               to realizing your vision. With meticulous attention to detail and a drive for 
               excellence, I guarantee stellar outcomes. Let's join forces and bring your projects 
               to fruition. Reach out today, and let's embark on this collaborative journey towards 
               success!"
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className='info__icon' />

                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">charlyqv98@gmail.com</h4>
                </div>
    
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className='info__icon' />

                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">44-32-71-58-96</h4>
                </div>
    
              </div>

              {/* <div className="contact__socials">
                <a href="https://facebook.com" className="contact__social-link">
                  <FaFacebookF />
                </a>

                <a href="https://twitter.com" className="contact__social-link">
                  <FaTwitter />
                </a>

                <a href="https://youtube.com" className="contact__social-link">
                  <FaYoutube />
                </a>

                <a href="https://dribbble.com" className="contact__social-link">
                  <FaDribbble />
                </a>
              </div> */}

            </div>
          </div>

          <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="form__input-group">
              <div className="form__input-div">
                <input 
                  type="text" 
                  name='name'
                  placeholder='Your Name' 
                  className="form__control"
                />
              </div>

              <div className="form__input-div">
                <input 
                  type="email"
                  name='email' 
                  placeholder='Your Email' 
                  className="form__control"
                />
              </div>
              
              <div className="form__input-div">
                <input 
                  type="text" 
                  name='subject'
                  placeholder='Your Subject' 
                  className="form__control"
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea 
                name="message" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder='Your Message' 
                className="form__control textarea"
              ></textarea>
            </div>

            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>

          </form>
        </div>
      </section>
    </main>
  )
}
