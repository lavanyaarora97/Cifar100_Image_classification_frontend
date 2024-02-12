import React, { useState, useRef, useEffect } from 'react';
import { Button,Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateState } from '../redux/actions';


 function ImageUploader({ sharedState, updateState }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [resData, setResData] = useState([])
  const [predictions, setPredictions] = useState([])
  console.log(sharedState)

  const fileInputRef = useRef(null);

  const handleImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setResData([])
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleSendToApi = () => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    const apiEndpoint = 'http://localhost:8003/upload';

    // Create FormData object
    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);

    // Send image to API
    fetch(apiEndpoint, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data);
        setResData(data)
        // Handle the API response as needed
        
      })
      .catch((error) => {
        console.error('Error sending image to API:', error);
      });
  };

  const handlePushToNewArray = () => {
    if (resData.length > 0) {
      // Get the first object from the original array
      const firstObject = resData[0];

      // Add the 'image' key with the selected image to the first object
      firstObject.image = selectedImage;

      // Set the new array by spreading the existing items and appending the modified first object
      setPredictions(prevArray => [...prevArray, firstObject]);
      //updateState(predictions)
    }
  };

  useEffect(()=>{
    handlePushToNewArray()
  },[resData])

  useEffect(()=>{
    updateState(predictions)
  },[predictions])

  console.log(predictions)
  return (
    <div>
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
      style={{
        border: isDragOver ? '2px dashed #aaaaaa' : '2px solid #cccccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '20px', // Adjust margin for better spacing
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        ref={(el) => (fileInputRef.current = el)}
        style={{ display: 'none' }}
      />
      <p>Drag and drop an image here, or click to select one.</p>
      {selectedImage && (
        <div className='d-flex flex-column align-items-center'>
          <Image src={selectedImage} alt="Selected" style={{ maxWidth: '80%', height: 'auto' }} />
          <div className='' style={{ marginTop: '10px' }}>
            {resData && (
              resData.map((res, index) => (
                <div key={index} className='d-flex align-items-center justify-content-center'>
                  <div className={`alert alert-${res.css} fw-bold text-center`}>
                    <div>class: {res.class}</div> <div>confidence: {res.confidence.toFixed(0)}%</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>

    {selectedImage && (
      <Button
        variant='warning'
        className='my-2 text-light fw-bold fs-5 w-100'
        onClick={handleSendToApi}
        style={{ marginBottom: '20px' }} // Adjust margin for better spacing
      >
        Classify
      </Button>
      
    )}
   
  </div>
  );
};





const mapStateToProps = (state) => ({
  sharedState: state.sharedState,
});

const mapDispatchToProps = {
  updateState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
