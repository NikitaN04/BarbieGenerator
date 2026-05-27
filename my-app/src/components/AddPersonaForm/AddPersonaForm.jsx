import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './AddPersonaForm.css'

function AddPersonaForm(props) {

  const [userName, setUserName] = useState("");
  const [userFavoriteColor, setUserFavoriteColor] = useState("");
  const [userHobby, setUserHobby] = useState("");
  const [userDreams, setUserDreams] = useState("");
  const [userFoods, setUserFoods] = useState("");
  const [userVibe, setUserVibe] = useState("");

  //funktion som genererar unikt id
  const generatePersonaId = () => {
      return crypto.randomUUID()
  }

  //hanterar en ny persona och skapar ett objekt
  const handleSubmit = (e) => {
    
    //inte skicka vidare användarens data
    e.preventDefault();

    //skapa en lista med alla fält för validering 
    const validateFieldsList = [
      userName,
      userFavoriteColor,
      userHobby,
      userDreams,
      userFoods,
      userVibe
    ];

    //validera att fälten inte är tomma med some() funktionen: https://www.w3schools.com/jsref/jsref_some.asp  
    if (validateFieldsList.some(field => field.trim() === "")) {
      alert("All fields must be filled to generate your pesona :)");
      return;
    }

    //Skapa nytt persona objekt
    const newPersona = {
      "id": generatePersonaId(),
      "name": userName,
      "faveColor": userFavoriteColor,
      "hobby": userHobby,
      "dreams": userDreams,
      "faveFoods": userFoods,
      "vibe": userVibe
    };

    //skicka till app
    props.addNewPersona(newPersona);

    //nolställa formuläret
    setUserName("");
    setUserFavoriteColor("");
    setUserHobby("");
    setUserDreams("");
    setUserFoods("");
    setUserVibe("");
  
    console.log(newPersona);
  }

  return (
    //placering av onSubmit() här ist för på knapp från w3school:https://www.w3schools.com/react/react_forms_submit.asp
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control 
            placeholder="name here..." 
            value={userName}
            onChange={e => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Favorite color(s):</Form.Label>
        <Form.Control 
            placeholder="e.g. purple, pink, orange..." 
            value={userFavoriteColor}
            onChange={e => setUserFavoriteColor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hobbies:</Form.Label>
        <Form.Control 
            placeholder="hobbies here..." 
            value={userHobby}
            onChange={e => setUserHobby(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dreams:</Form.Label>
        <Form.Control as="textarea" rows={4} 
            placeholder="tell us about your dreams or a lifestyle that you dream about..." 
            value={userDreams}
            onChange={e => setUserDreams(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Favorite foods:</Form.Label>
        <Form.Control 
            placeholder="e.g. sushi, pizza, pasta..."
            value={userFoods}
            onChange={e => setUserFoods(e.target.value)}
        />
      </Form.Group>   

      <Form.Group className="mb-3">
        <Form.Label>Vibe:</Form.Label>
        <Form.Select
          value={userVibe}
          onChange={e => setUserVibe(e.target.value)}
        >
          <option value="">pick a vibe for your persona...</option>
          <option value="cozy">Cozy</option>
          <option value="luxurious">Luxurious</option>
          <option value="beach life">Beach Life</option>
          <option value="winter wonderland">Winter Wonderland</option>
          <option value="fantasy">Fantasy</option>
          <option value="futuristic">Futuristic</option>
          <option value="cottage core">Cottage Core</option>
          <option value="dark academia">Dark Academia</option>
          <option value="dream core">Dream Core</option>
        </Form.Select>
      </Form.Group>
      
      <Button className="submit-btn" variant="" type="submit">
        Generate my Persona
      </Button>
    </Form>
  );
}

export default AddPersonaForm;