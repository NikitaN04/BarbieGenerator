import './GlowButton.css'
import Button from 'react-bootstrap/Button';
{/*Denna gör så vi kan länka vidare en användare vid knapptryck*/}
import { Link } from "react-router";

//Vill ha olika klassnamn så vi kan styra CSS med storlekarna
function GlowButton({text, saveOnClick, to, className = "" }) {
  
  //Om vi tar emot "to" så renderar vi knappen med navigering så användaren tas till generator sidan. 
  if (to) {
    return (
      <Link to={to} >
        <Button className={`glow-on-hover ${className}`}>{text}</Button>
      </Link>
    );
  }

  //Om inte "to" så renderas knappen som ska reagera på onClick event.
  return (
    <Button onClick={saveOnClick} className={`glow-on-hover ${className}`}>{text}</Button>
  );
}

export default GlowButton;