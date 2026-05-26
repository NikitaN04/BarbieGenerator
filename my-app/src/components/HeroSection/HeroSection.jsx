import './HeroSection.css';
import Button from 'react-bootstrap/Button';

function HeroSection() {
    return (
        <div className='hero-container'>
        <h1>Welcome to Midnight Sun Dreamhouse!</h1>
              <p>Here you can either create a Barbie persona based on yourself or design a brand new dream persona from your imagination.</p>
              <p>Tell us about your (or your imagined) lifestyle, hobbies, favorite colors, and dreams.</p>
              <p>Then watch the magic happen as we transform your answers into a unique persona and a Dreamhouse created just for you.</p>
              <p>Ready to create a little magic?</p>
              <Button size="lg" className="glow-on-hover">LET'S GET STARTED</Button>
        </div>
    )
}

export default HeroSection;