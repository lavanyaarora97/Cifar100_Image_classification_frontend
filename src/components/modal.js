import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageUploader from './ImageUploader';

function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='fs-5 my-4 text-light fw-bold' variant="warning w-100" onClick={handleShow}>
        Try Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header style={{backgroundColor:'#210038'}} closeButton>
          <Modal.Title  className='text-light'>Choose Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ImageUploader/>
        </Modal.Body>
        <Modal.Footer>
          <Button className=' fw-bold fs-5' variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;