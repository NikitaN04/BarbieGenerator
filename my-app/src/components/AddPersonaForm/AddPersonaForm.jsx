import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './AddPersonaForm.css'

function AddPersonaForm() {

  const [userName, setuserName] = useState("");
  const [userFavoriteColor, setuserFavoriteColor] = useState("");
  const [userHobby, setuserHobby] = useState("");
  const [userDreams, setuserDreams] = useState("");
  const [userVibe, setuserVibe] = useState("0");

  const handleSubmit = (e) => {
    
    //inte skicka vidare användarens data
    e.preventDefault();


  }
  

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Namn:</Form.Label>
        <Form.Control 
            placeholder="Namn här..." 
            value={userName}
            onChange={e => setuserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Favorit färg(er):</Form.Label>
        <Form.Control 
            placeholder="Ex: lila,rosa,orange..." 
            value={userFavoriteColor}
            onChange={e => setuserFavoriteColor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hobbys:</Form.Label>
        <Form.Control 
            placeholder="Hobbys..." 
            value={userHobby}
            onChange={e => setuserHobby(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Drömmar:</Form.Label>
        <Form.Control as="textarea" rows={4} 
            placeholder="Berätta om dina drömmar eller en livsstil du drömmer om..." 
            value={userDreams}
            onChange={e => setuserDreams(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Vibe:</Form.Label>
        <Form.Select
            value={userVibe}
            onChange={e => setuserVibe(e.target.value)}
        >
            <option value="0">Ge din persona en vibe...</option>
            <option value="1">Cozy</option>
            <option value="2">Luxury</option>
            <option value="3">Beach Life</option>
            <option value="4">Winter Wonderland</option>
            <option value="5">Fantasy</option>
            <option value="6">Futuristic</option>
            <option value="7">Cottage Core</option>
            <option value="8">Dark Academia</option>
            <option value="9">Dream Core</option>
        </Form.Select>
      </Form.Group>

      <Button className="submit-btn" variant="" type="submit" onClick={handleSubmit}>
        Generate my Persona
      </Button>
    </Form>
  );
}

export default AddPersonaForm;