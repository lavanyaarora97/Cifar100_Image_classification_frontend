import logo from './logo.svg';
import './App.css';
import { Button, Container, Image, Row,Col,Accordion } from 'react-bootstrap';
import { ImageUploader } from './components/ImageUploader';
import NavBarcomponent from './components/NavBar';
import ModalComponent from './components/modal';
import Footer from './components/footer';
import Cifar100Description from './components/main';
import AboutImageClassification from './components/About';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { updateState } from './redux/actions';
import Accord from './components/acodium';

function App({ sharedState, updateState }) {
  console.log(sharedState)
  return (
    <div>
      <NavBarcomponent />
       
      <div className='container-fluid'>
      <Row className='py-2 px-2 px-md-5' style={{ height: 'auto', backgroundColor: '#210038' }}>
      {/* First Column */}
      <Col md={6} className='d-flex flex-column justify-content-center'>
        <h4 className='lead-3 text-light display-7 fw-bold'>CIFAR100 Image Classification</h4>
        <p className='text-light my-3 my-md-5 fs-6'>
          Welcome to Image Clasify, your gateway to the fascinating world of image classification using CIFAR-100! Immerse
          yourself in the realm of computer vision as we bring you an intuitive and powerful tool for identifying and
          categorizing diverse objects within the CIFAR-100 dataset.
        </p>
        <ModalComponent />

        {/* Add your ModalComponent here */}
      </Col>

      {/* Second Column (Hidden on Small Devices) */}
      <Col md={6} className=''>
        <div className='d-flex flex-column align-items-center justify-content-center w-100'>
          <Image style={{ maxWidth: '50%' }} src={require('./images/orange-removebg-preview.png')} fluid />
          <div className='alert alert-success w-75 mt-3 fw-bold text-center'>orange 100%</div>
          <div className='alert alert-danger w-75 mt-3 fw-bold text-center'>apple 30%</div>
          <div className='alert alert-danger w-75 mt-3 fw-bold text-center'>lemon 20%</div>
          <div className='alert alert-danger w-75 mt-3 fw-bold text-center'>sweet_paper 0%</div>
        </div>
      </Col>
    </Row>
      </div>
      <main>
        <Container>
          <div className='my-3'>

          <Accordion>
    
    {
       sharedState? sharedState.map((item,index)=>(
            <Accordion.Item eventKey={index}>
            <Accordion.Header > <span className='fw-bold'>Predictions {index +1 }</span></Accordion.Header>
            <Accordion.Body className='d-flex justify-content-center'>
            <div key={index} className='mb-3 d-flex flex-column'>
          <Image src={item.image}style={{ maxWidth: '100%', height: 200 }}  fluid />
          <label className='alert alert-success text-center fw-bold mt-2'>class: {item.class} <div>confidence: {item.confidence.toFixed(0)}%</div></label>
        </div>
            </Accordion.Body>
          </Accordion.Item>


        )) 
        :<>
        <h1>your predictions wlill be displayed here</h1>
        </>

}

 
</Accordion> 


           


          </div>
        <AboutImageClassification />
        </Container>
        <Cifar100Description />
      </main>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  sharedState: state.sharedState,
});

const mapDispatchToProps = {
  updateState,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
