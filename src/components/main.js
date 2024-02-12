import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateState } from '../redux/actions';



const Cifar100Description = ({sharedState, updateState}) => {
  return (
    <div >
    <Container className="my-4">
        <p className='fw-bold display-6 my-4  pt-4'>Cifar100 Dataset</p>
      <Row className="justify-content-center">
        {/* Card 1 */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={require('../images/overVIew.jpg')} alt="Dataset Overview" />
            <Card.Body>
              <Card.Title>Dataset Overview</Card.Title>
              <Card.Text>
                The CIFAR-100 dataset consists of 60,000 32x32 color images in 100 different classes, with 600 images per class.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={require('../images/lables.png')} alt="Class Labels" />
            <Card.Body>
              <Card.Title>Class Labels</Card.Title>
              <Card.Text>
                The dataset is divided into 20 superclasses, each containing 5 fine-grained classes. It covers a wide range of objects and animals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Card className="h-100" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img variant="top" src={require('../images/ml.jpeg')} alt="Use in Machine Learning" />
            <Card.Body>
              <Card.Title>Use in Machine Learning</Card.Title>
              <Card.Text>
                CIFAR-100 is commonly used for benchmarking machine learning models, particularly in the field of image classification and object recognition.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Cifar100Description;
