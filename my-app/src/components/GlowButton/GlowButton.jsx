import './GlowButton.css'
import Button from 'react-bootstrap/Button';
{/*Denna gör så vi kan länka vidare en användare vid knapptryck*/}
import { Link } from "react-router";

//Vill ha olika klassnamn så vi kan styra CSS med storlekarna
function GlowButton({text, saveOnClick, to, className = "", disabled = false }) {
  
  //Om vi tar emot "to" så renderar vi knappen med navigering på startsidan så användaren tas till generator sidan. 
  if (to) {
    return (
      <Link to={to} >
        <Button className={`glow-on-hover ${className}`}>{text}</Button>
      </Link>
    );
  }

  //Om inte "to" så renderas knappen som ska reagera på onClick event i result page.
  //disabled={disabled} -> Sköter så att knappen blir disabled vid spara persona/dreamhouse tryck. 
  return (
    <Button 
      onClick={saveOnClick}
      className={`glow-on-hover ${className}`}
      disabled={disabled}
      >
        {text}
      </Button>
  );
}

export default GlowButton;