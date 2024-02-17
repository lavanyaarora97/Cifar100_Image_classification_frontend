import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Image, Card } from 'react-bootstrap';
import NavCom from './NavBar';
import Footer from './footer';
import Main from './Views/mai';
import Spinner from 'react-bootstrap/Spinner';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePreview, setSelectedFilePreview] = useState(null);
  const [resData, setResData] = useState([]);
  const [newData, setResNewData] = useState([]);
  const [loading,setLoaoding] = useState(false)

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFilePreview(null);
    }
  };

  const handleUpload = async () => {
    setLoaoding(true)
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const baseUrl = 'https://cifar-100-api.onrender.com/upload'

        const apiEndpoint = baseUrl;

        const response = await fetch(apiEndpoint, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();
        console.log('API response:', data);
        setResData(data);
        setLoaoding(false)
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  useEffect(() => {
    const data = { image: selectedFilePreview, prediction: resData };

    if (resData.length > 0) {
      setResNewData((prevArray) => [...prevArray, data]);
    }
  }, [resData]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFilePreview(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container-fluid " style={{marginTop:120}}>
      <NavCom />
      <Container>
        <div className="container-fluid">
          <Row className="">
            <div className="col-12 ">
              <div className="display-4 my-2 mb-3 text-center">Image classification</div>
              <p className="lead my-4 text-center">
              The Image Analyzer website utilizes a Convolutional Neural Network (CNN) trained on the CIFAR-100 dataset to classify images
              </p>
              <p className="lead my-4 text-center">The process involves data preprocessing, where images are resized and normalized, followed by data augmentation to expand the dataset.</p>
              <p className="lead my-4 text-center">The CNN architecture automatically learns hierarchical features from the images to classify them into one of the 100 classes. </p>







              <Form className=' d-flex align-items-center justify-content-center'>
                <Form.Group onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
                  <div className="upload-box " onClick={handleButtonClick} style={{height:200,width:300, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', border: '2px dashed #ccc', borderRadius: '10px', padding: '30px', textAlign: 'center', cursor: 'pointer', backgroundImage: selectedFilePreview ? `url(${selectedFilePreview})` : 'none', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    {!selectedFilePreview && <p className=''>Drag & Drop Image Here or Click to Upload</p>}
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </div>
                </Form.Group>
              </Form>
              <div className="my-2  d-flex justify-content-center">
                {
                  loading ?  <Spinner className='my-3' animation="border" variant="primary" /> :
                  <Button className='bg-dark text-light w-50 my-4 fw-bold fs-5' variant=" text-center" disabled={!selectedFile} onClick={handleUpload}>
                  Classify
                </Button>
               
                }
               
              </div>

              <div className="display-5">Results</div>
            </div>
          </Row>
        </div>
      </Container>

      <div className="container-fluid p-2">
        <Row xs={2} sm={2} lg={3} className="text-center">
          {newData.map((item, index) => (
            <Col key={index}>
              <Card className="mb-3">
                <Card.Body>
                  <Image src={item.image} alt={`Image ${index}`} fluid />
                  {item.prediction.map((prediction, predictionIndex) => (
                    <div className={`alert alert-${prediction.css} mt-2`} key={predictionIndex}>
                      <div>Class: {prediction.class}</div>
                      <div>Confidence: {prediction.confidence.toFixed(2)}%</div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  
      <Footer />
    </div>
  );
}

export default FileUploader;
