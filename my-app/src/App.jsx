// 1. STAGE 2. MEDDELANDE 3. COMMITT
// Alex: /C/Users/szucs/OneDrive/Dokument/GitHub/BarbieGenerator/my-app
//Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, Route, useNavigate } from "react-router";
import AddPersonaForm from './components/AddPersonaForm/AddPersonaForm';
import GradientText from './components/GradientText/GradientText';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import HeroSection from './components/HeroSection/HeroSection';
import { useState } from 'react';
import { generatePersonaWithAi, generateDreamHouseWithAi } from './api/googleGeminiApi';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './app.css';
import DisplayResultPage from './components/DisplayResultPage/DisplayResultPage';

//TAS SNART BORT IGEN #####################################
import { mockAiResponse } from './api/mockdata';

//Byggt med Bootstrap
const App = () => {

  //Skapa spinner state för loading.
  const [isLoading, setIsLoading] = useState(false);

  //skapa navigate funktion via useNavigate hook. Använder denna endast eftersom användaren ska skickas vidare utan att ha interagerat. 
  let navigate = useNavigate();

  //funktion som lägger till ny persona i listan med personas
  const handleANewPersona = async (newPersona) => { //props: objektet med ny personadata vi skapade i addpersonaform

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

    //en try/catch för att samla alla ai anrop och kunna hantera spinner komponenten på ett smidigt sätt
    try { 
      /*
      //Gemini SDK:n (det är det oficiella biblioteket) gör själva nätverksanropet åt oss -ingen fetch behövs.    
      const aiPersonaResult = await generatePersonaWithAi(prompt);

      //Göra till json object så vi kan nyttja infon vi fick ut. 
      const personaAsJsonObject = JSON.parse(aiPersonaResult);

      //Log för debug
      console.log(aiPersonaResult);

      //skapa image variablen med bildatan i
      const dreamHouseImageData = await generateDreamHouseWithAi(personaAsJsonObject.imagePrompt);
      
      //Spinner försvinner.
      setIsLoading(false);

      //Log för debug
      console.log(personaAsJsonObject)

      //navigera vidare användaren till resultat sidan och skicka med persona storyn och bilddatan in i nästa steg /result. 
      navigate("/result", {
        state: {
          personaStory: personaAsJsonObject.story,
          dreamHouseImage: dreamHouseImageData
        }
      });
      */





        // Vi fejkar att API:et tar 2 sekunder på sig så vi kan fortsätta testa LoadingSpinnern också!
        setTimeout(() => {
          setIsLoading(false);
          
          // Navigera med vår hårdkodade data
          navigate("/result", {
            state: {
              personaStory: mockAiResponse.story,
              dreamHouseImage: mockAiResponse.mockBase64Image
            }
          });
        }, 2000); 






    } catch (myError) {
      //Error i consolen
      console.error("Något gick fel vid genereringen:", myError);
      
      //Stänga av spinner 
      setIsLoading(false);

      //Alerta användaren om att något gick fel
      alert("WOops! Something went wrong while trying to generate your Persona and DreamHouse. The AI probably got too much traffic right now, try again!! <3")
    }
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
                {/*kallas för Conditional Rendering -> är syntax shortcuts.
                  isLoading=false: Gör ingenting -> Gå vidare.
                  isLoading=true: Returnera <LoadingSpinner />.
                  Vi använder detta eftersom man inte kan skriva hela if-satser inuti return-blocken.
                  Länk: https://react.dev/learn/conditional-rendering*/}
                {isLoading && <LoadingSpinner />}
                <AddPersonaForm addNewPersona={handleANewPersona}></AddPersonaForm>
              </div>
              }>
            </Route>

            {/* Route till att Display resultatet från AI */}
            <Route path="/result" element={
              <DisplayResultPage></DisplayResultPage>
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