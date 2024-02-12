import React from 'react';
import { Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer  className=" text-light bg-primary py-5">
      <div className="container">
        <div className="row">
          {/* Company Description Column */}
          <div className="col-md-4">
          <Image className='mb-3' style={{height:80}} src={require('../images/logov2.png')}  fluid/>   

            <h5 className="mb-4 display-6 fw-bold ">Image Analyzer</h5>
            <p>
            Welcome to Image Clasify, your gateway to the fascinating world of image classification using CIFAR-100! Immerse
          yourself in the realm of computer vision as we bring you an intuitive and powerful tool for identifying and
          categorizing diverse objects within the CIFAR-100 dataset.
            </p>
          </div>

          {/* Company Links Column */}
          <div className="col-md-4">
            <h5 className="mb-4">Company Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Leave Us a Message Column */}
          <div className="col-md-4">
            <h5 className="mb-4">Leave Us a Message</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Message</label>
                <textarea className="form-control" id="messageInput" rows="3" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-dark fw-bold text-light fs-5 w-100">Submit</button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-5">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
