import './LoadingSpinner.css'
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <Spinner id="loading-spinner" animation="border" role="status">
      <span className="visually-hidden">Generating your Persona and Dreamhouse...</span>
      <p>Generating your Persona and Dreamhouse...</p>
    </Spinner>
  );
}

export default LoadingSpinner;