import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';
import { updateState } from '../redux/actions';

function AllCollapseExample({ sharedState, updateState }) {
    console.log(sharedState)
  return (
   <Accordion>
    
        {
           sharedState? sharedState.map((item)=>(
                <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>


            )) 
            :<>
            <h1>your predictions will be displayed here</h1>
            </>
    
}

     
    </Accordion> 
  );
}

const mapStateToProps = (state) => ({
    sharedState: state.sharedState,
  });
  
  const mapDispatchToProps = {
    updateState,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllCollapseExample);