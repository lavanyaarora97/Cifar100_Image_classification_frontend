import React from 'react';
import '../App.css'

const AboutImageClassification = () => {
  return (
    <div className="my-4">
      <div className="container my-5">
        <div className="row">
          {/* Column 1: Image Classification Overview */}
          <div className="col-lg-6 mb-4">
            <h2 className="mb-3 fw-bold">Image Classification Overview</h2>
            <img src={require('../images/image class.png')} alt="Image Classification Overview" className="img-fluid mb-3" />
            <p className=''>
              Image classification is a computer vision task that involves categorizing an input image into one or more predefined classes or labels. It is a fundamental problem in the field of machine learning and has various applications, including object recognition, autonomous vehicles, and medical diagnosis.
            </p>
            <ul >
              <li className='my-3'><span className='fw-bold fst-italic'>Task: </span>Assign a label or category to an input image.</li>
              <li className='my-3'><span className='fw-bold fst-italic'>Objective:</span> Teach a computer to recognize and differentiate between different objects or patterns within images.</li>
              <li className='my-3'><span className='fw-bold fst-italic'>Methods:</span> Machine learning models, particularly Convolutional Neural Networks (CNNs), are commonly used for image classification tasks.</li>
            </ul>
          </div>

          {/* Column 2: Image Classification for CIFAR-100 */}
          <div className="col-lg-6 mb-4">
            <h2 className="mb-3 fw-bold">Image Classification for CIFAR-100</h2>
            <img src={require('../images/cifar.jpg')} alt="Image Classification for CIFAR-100" className="img-fluid mb-3" />
            <p className=''>
              The image classification for CIFAR-100 involved several key steps, from data collection to model deployment. Below are the main components of the process:
            </p>
            <ul>
              <li className='my-3'><span className='fw-bold '>Data collection: </span>
                <ul>
                  <li>Source: Kaggle dataset containing 60,000 32x32 color images in 100 different classes.</li>
                </ul>
              </li>
              <li className='my-3'><span className='fw-bold '>Data Visualization: </span>
              
                <ul>
                  <li>Exploration of dataset structure and sample images to understand the nature of the data.</li>
                </ul>
              </li>
              <li className='my-3'><span className='fw-bold '>Data Augmentation: </span>
              
                <ul>
                  <li>Application of various transformations to increase the diversity of the training dataset.</li>
                </ul>
              </li>
              <li className='my-3'><span className='fw-bold '>CNN Model Development: </span>
              
                <ul>
                  <li>Creation of a Convolutional Neural Network architecture for image classification.</li>
                  <li>Training the model on the augmented dataset.</li>
                </ul>
              </li>
              <li><span className='fw-bold '>App Deployment: </span>
              
                <ul>
                  <li>Integration of the trained model into an application for real-world usage.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageClassification;
