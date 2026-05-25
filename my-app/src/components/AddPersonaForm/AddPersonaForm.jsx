import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddPersonaForm() {

    const [userName, setuserName] = useState("");
    const [userFavoriteColor, setuserFavoriteColor] = useState("");
    const [userHobby, setuserHobby] = useState("");
    const [userDreams, setuserDreams] = useState("");
    const [userVibe, setuserVibe] = useState("0");


  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Namn:</Form.Label>
        <Form.Control 
            placeholder="Namn här..." 
            value={userName}
            OnChange={e => setuserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Favorit färg\(er\):</Form.Label>
        <Form.Control 
            placeholder="Dina favorit färg(er)..." 
            value={userFavoriteColor}
            OnChange={e => setuserFavoriteColor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Hobby:</Form.Label>
        <Form.Control 
            placeholder="Hobby..." 
            value={userHobby}
            OnChange={e => setuserHobby(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Drömmar:</Form.Label>
        <Form.Control 
            placeholder="Dina drömmar..." 
            value={userDreams}
            OnChange={e => setuserDreams(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Vibe:</Form.Label>
        <Form.Select
            value={userVibe}
            OnChange={e => setuserVibe(e.target.value)}
        >
            <option value="0"> Välj din personas vibe...</option>
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


      <Button variant="primary" type="submit">
        Generate Persona
      </Button>
    </Form>
  );
}

export default AddPersonaForm;