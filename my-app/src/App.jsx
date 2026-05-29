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
import { generatePersonaWithAi } from './api/googleGeminiApi';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import './app.css'


//Byggt med Bootstrap
const App = () => {

  const [personasList, setPersonasList] = useState([]);

  //Skapa spinner state för loading.
  const [isLoading, setIsLoading] = useState(false);

  //funktion som lägger till ny persona i listan med personas
  const handleANewPersona = async (newPersona) => { //props: objektet med ny personadata vi skapade i addpersonaform

    //TODO: Kommer behöva läsa in gamla resultat från local storage sen också. samt spara ner nya listan till Localstorage

    //gamla listan in i ny lista + newPersona sist i listan.
    setPersonasList([...personasList, newPersona]);

    //Skapa prompten som ska skickas till AI
    const prompt = `
      Act as a creative storyteller and expert in Barbie-core aesthetics. Your task is to generate a vibrant, magical, and highly descriptive Barbie Dreamhouse persona based on the following user details:

      User Profile:
      * Name: ${newPersona.name}
      * Favorite colors: ${newPersona.faveColor}
      * Hobbies: ${newPersona.hobby}
      * Dreams: ${newPersona.dreams}
      * Favorite Foods: ${newPersona.faveFoods}
      * Vibe: ${newPersona.vibe}

      Instructions:
      1. Write a cohesive character description that brings this persona to life in approximately 250 words.
      2. Make the tone highly aesthetic, magical, uplifting, and descriptive. Use vivid sensory language.
      3. Woven into the story, creatively invent and include: a signature accessory that matches the dreams of the user, an adorable pet/sidekick, and a catchy personal motto.
      4. Also, generate a separate, highly detailed visual prompt that can be used later in an AI image generator to create a picture of this persona's Dreamhouse, take the vibe heavily account. The imagePrompt should be optimized for AI image generation and include architecture, lighting, colors, atmosphere, aesthetic details, and cinematic composition. A detailed visual description to create a Dreamhouse. The imagePrompt should describe the scene like a cinematic photograph or architectural visualization rather than a list of keywords.
      5. You must output the response strictly in valid JSON format without any markdown formatting, backticks, or introductory filler. Ensure the JSON is parsable with JSON.parse().

      Use this exact JSON structure:
      {
        "story": "example story",
        "imagePrompt": "example data"
      }`;
      
    //Spinner ska gå igång tills att vi fått svar 
    setIsLoading(true);  

    //Gemini SDK:n gör själva nätverksanropet åt oss -ingen fetch behövs.
    const aiPersonaResult = await generatePersonaWithAi(prompt);

    //Spinner försvinner.
    setIsLoading(false);

    //Log för debug
    console.log(aiPersonaResult)

    //Göra till json object så vi kan nyttja infon vi fick ut. 
    const personaAsJsonObject = JSON.parse(aiPersonaResult)

    //Log för debug
    console.log(personaAsJsonObject)
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
        {/*Om isLoading=true så ska Loadingspinner renderas annars inte - placeras den här utanför Routes blir den mer "global", lägger vi den innuti /generator finns spinnern endast där*/}
          <Routes>
            {/* Route till startsidan */}
            <Route path="/" element={
              <HeroSection></HeroSection>
              }>
            </Route>
            {/* Route till generatorn */}
            <Route path="/generator" element={
              <div className="spinner-content-area">
                {isLoading && <LoadingSpinner />}
                <AddPersonaForm addNewPersona={handleANewPersona}></AddPersonaForm>
              </div>
              }>
            </Route>

            {/* Route till galleriet */}
            <Route path="/gallery" element={<>
              <p>Här kommer mer till galleriet</p>
              </>}>
            </Route>

            {/* Route till om oss */}
            <Route path="/about-us" element={<>
              <p>250 ord TEST: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </>}>
            </Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;