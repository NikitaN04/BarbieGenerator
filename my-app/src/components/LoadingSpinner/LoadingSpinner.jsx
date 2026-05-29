import './LoadingSpinner.css'
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <div id="loading-spinner">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Generating your Persona and Dreamhouse...</span>
        </Spinner>
        <p>Generating your Persona and Dreamhouse...</p>
    </div>
  );
}

export default LoadingSpinner;