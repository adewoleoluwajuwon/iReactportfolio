import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const ref = useRef();
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
          'service_z1r65ej', 
          'template_ftv8k8n', 
          ref.current, 
          'r4kQyc504hyENaf1Q'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true)
          },
          (error) => {
            console.log(error.text);
            setSuccess(false)
          },
        );
};

  return (
    <section id="Contact" className="contact--section">
      <div className="contact-info">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me for any inquiries. I'm always eager to connect with new people and discuss exciting projects.
        </p>
      </div>
      <form ref={ref} className="contact-form-container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            {/* <span className="field-label text-md">Name</span> */}
            <input
              type="text"
              name="from_name"
              className="contact-input text-md"
              id="name"
              placeholder="Name"
              required
            />
          </label>
    
          <label htmlFor="email" className="contact--label">
            {/* <span className="field-label text-md">Email</span> */}
            <input
              type="email"
              name="user_email"
              className="contact-input text-md"
              id="email"
              placeholder="Email"
              required
            />
          </label>

          <label htmlFor="message" className="contact--label">
            {/* <span className="field-label text-md">Message</span> */}
            <textarea
              className="contact-input field-label text-md"
              name="message"
              id="message"
              rows="5"
              placeholder="Type your message..."
            />
          </label>

          <label htmlFor="checkbox" className="checkbox-label">
            <span className="text-sm">I accept the terms</span>
            <input type="checkbox" required name="checkbox" id="checkbox" />
          </label>
        </div>          
        
        <div className="submit-container">
          <button 
            className="btn btn-primary contact-form-btn"
            type="submit" value="Send" 
          >
            Submit
          </button>
          {success && (
            <p className="success-message">
              Your message has been sent. We'll get back to you soon :)
            </p>  )
          }
        </div>
      </form>
    </section>
  );
}
