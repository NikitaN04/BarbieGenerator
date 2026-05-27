// 1. STAGE 2. MEDDELANDE 3. COMMITT
// Alex: /C/Users/szucs/OneDrive/Dokument/GitHub/BarbieGenerator/my-app
//Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route } from "react-router";
import AddPersonaForm from './components/AddPersonaForm/AddPersonaForm';
import GradientText from './components/GradientText/GradientText';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import HeroSection from './components/HeroSection/HeroSection';
import { useState } from 'react';

//Byggt med Bootstrap
const App = () => {

  const [personasList, setPersonasList] = useState([]);

  //funktion som lägger till ny persona i listan med personas
  const handleANewPersona = (newPersona) => { //props: objektet med ny personadata vi skapade i addpersonaform

    //TODO: Kommer behöva läsa in gamla resultat från local storage sen också. samt spara ner nya listan till Localstorage

    //gamla listan in i ny lista + newPersona sist i listan.
    setPersonasList([...personasList, newPersona]);
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center py-4">
      {/* Rad 1 - heading*/}
      <Row>
        <Col>
        <GradientText
          colors={["#ff2768", "#ff33f9", "#fff27d"]}
          animationSpeed={3}
          showBorder={false}
          >
          Midnight Sun Dreamhouse
        </GradientText>
        </Col>
      </Row>
      {/* Rad 2 - b  readcrums*/}
      <Row>
        <Col>
            <BreadCrumbs></BreadCrumbs>
        </Col>
      </Row>
      {/* Rad 3 - introduction info*/}
      <Row>
        <Col>
          <Routes>
            {/* Route till startsidan */}
            <Route path="/" element={
              <HeroSection></HeroSection>
              }>
            </Route>

            {/* Route till generatorn */}
            <Route path="/generator" element={
              <AddPersonaForm addNewPersona={handleANewPersona}></AddPersonaForm>
              }>
            </Route>

            {/* Route till galleriet */}
            <Route path="/gallery" element={<>
              <p>Här kommer mer till galleriet</p>
              </>}>
            </Route>

            {/* Route till om oss */}
            <Route path="/about-us" element={<>
              <p>Här kommer mer till about us</p>
              </>}>
            </Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;