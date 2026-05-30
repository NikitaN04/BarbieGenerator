import './DisplayResultPage.css'
import GlowButton from '../GlowButton/GlowButton'
import { useState } from 'react';
import { Link } from "react-router";
import { useLocation } from 'react-router';
import ShinyText from '../ShinyText/ShinyText';
import { useSavingContext } from '../../context/SavingContext';

function DisplayResultPage() {

    const location = useLocation();

    //kolla om personaStory & dreamHouseImage finns i location.state  och lägg i variabler annars {}
    // || {} för vi får ha ett tomt objekt så inte sidan kraschar - lite skyddsnät.
    const {id, name, personaStory, dreamHouseImage} = location.state || {};

    //Hämta in save funktionerna från useSAvingsContext genom Object destructuring (Basic assignment rubrik).
    //Länk: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
    const {saveStory, saveDreamHouse} = useSavingContext();

    //Save Knapparna states
    const [personaIsSaved, setPersonaIsSaved] = useState(false);
    const [dreamHouseIsSaved, setDreamHouseIsSaved] = useState(false);

    const handleBtnIfPersonaIsSaved = () => {
        saveStory(id, name, personaStory);
        console.log("Sparar personan..");
        //Ändra knapp till disabled
        setPersonaIsSaved(true);
    };

    const handleBtnIfDreamHouseIsSaved = () => {
        saveDreamHouse(id, name, dreamHouseImage)
        console.log("Sparar dream house..");
        //Ändra knapp till disabled
        setDreamHouseIsSaved(true);
    }

        return (
        <div className='result-container'>

            {/* Persona innehåll */}
            <section className='content-card content-card-story'>
                <h3>
                    <ShinyText
                    text="✨ YOUR PERSONA"
                    speed={2}
                    delay={0}
                    color="#4f46e5"
                    shineColor="#fb28db"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    />
                </h3>
                <p>{personaStory ? personaStory : "No story was found.. Generate one! :D"}</p>
                {/*operator (? :) Länk: https://react.dev/learn/conditional-rendering*/}
                {/* disabled = Inaktiv om content är sparad ELLER om story saknas med hjälp av || ! */}
                <GlowButton
                    text={personaIsSaved ? "PERSONA SAVED!" : "SAVE PERSONA TO GALLERY!"}
                    saveOnClick={handleBtnIfPersonaIsSaved}
                    disabled={personaIsSaved || !personaStory}
                    className="btn-result-section"
                    >
                </GlowButton>
            </section>

            {/* Dreamhouse innehåll */}
            <section className='content-card content-card-dreamhouse'>
                <h3>
                    <ShinyText
                    text="✨ YOUR DREAMHOUSE"
                    speed={2}
                    delay={0}
                    color="#4f46e5"
                    shineColor="#fb28db"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    />
                </h3>
                { dreamHouseImage ? (<img src={dreamHouseImage} alt="Your generated Dreamhouse" className='dreamhouse-img'/>) : (<p>DreamHouse not found.. Generate new!</p>)}
                <GlowButton
                    text={dreamHouseIsSaved ? "DREAMHOUSE SAVED!" : "SAVE DREAMHOUSE TO GALLERY!"}
                    saveOnClick={handleBtnIfDreamHouseIsSaved}
                    disabled={dreamHouseIsSaved || !dreamHouseImage}
                    className="btn-result-section"
                    >
                </GlowButton>
            </section>

            <div className="bottom-navigation">
                <GlowButton 
                    text="Generate New Persona" 
                    to="/generator" 
                    className="result-bottom-nav" 
                />
                <GlowButton 
                    text="Go to Gallery" 
                    to="/gallery" 
                    className="result-bottom-nav" 
                />
            </div>
        </div>
    )
}

export default DisplayResultPage;
