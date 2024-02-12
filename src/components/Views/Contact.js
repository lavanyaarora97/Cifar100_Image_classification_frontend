// Contact.js
import React from 'react';
import { Container } from 'react-bootstrap';
import NavCom from '../NavBar';
import Footer from '../footer';

function Contact() {
  return (
    <div>
    <Container >
        <NavCom />
    <div style={{marginTop:150}} className=''>
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to get in touch with us!</p>
      <form className='my-4 gap-2 d-flex flex-column'>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Send Message</button>
      </form>
    </div>
    
    </Container>
    <Footer />
    </div>
  );
}

export default Contact;
