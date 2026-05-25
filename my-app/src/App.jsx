// 1. STAGE 2. MEDDELANDE 3. COMMITT
// Alex: /C/Users/szucs/OneDrive/Dokument/GitHub/BarbieGenerator/my-app
//Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Routes, Route } from "react-router";


//Byggt med Bootstrap
const App = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center py-4">
      {/* Rad 1 - heading*/}
      <Row>
        <Col>
          <h1> Midnight Sun Dreamhouse</h1>
        </Col>
      </Row>
      {/* Rad 2 - b  readcrums*/}
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">
              Start
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              Generator
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              Gallery
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              About Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {/* Rad 3 - introduction info*/}
      <Row>
        <Col>
          <p> Här kan du svara på frågor om din livsstil (bor, ålder, jobb, hobbys), favoritfärger och drömmar, varpå OpenAI genererar en personlig "Barbie-persona" och beskriver din perfekta Dreamhouse liv. </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;