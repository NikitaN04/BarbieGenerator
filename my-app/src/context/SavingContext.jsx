import { createContext, useContext, useEffect, useState } from "react";
import defaultHouseImage from '../assets/delfin2.png'

const SavingContext = createContext();

export const SavingProvider = ({ children }) => {

    //Kolla om det finns något i localstorage och gör om det till json-objekt annars lägg tom lista där i.
    const [savedProfiles, setSavedProfiles] = useState(() => {
        const profilesList = localStorage.getItem("mySavedProfiles") ? JSON.parse(localStorage.getItem("mySavedProfiles")) : [];
        return profilesList;
    });

    //Varje gång savedProfiles ändras (någon lägger till eller tar bort en persona), kör den här koden och sparar automatiskt till LocalStorage
    useEffect(() => {
        localStorage.setItem("mySavedProfiles", JSON.stringify(savedProfiles));
    }, [savedProfiles]);

    /* Vi ger nu användaren möjlighet att välja att spara ner antingen bild och/eller persona.
       Vilket resulterar i att ett objekt skapas vid knapptyck på en av spara knapparna
       Vilket vi måste hantera.
    */
    
    //Spara ner Story
    const saveStory = (id, name, story) => {
        //currentProfiles är parameter med de sparade profiler som finns i localstorage just nu
        setSavedProfiles(currentProfiles => {
            //find() länk: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            //Kolla om objektet för personan redan skapats när man tryckt på spara bild genom id.
            const profileExists = currentProfiles.find((profile) => profile.id === id);

            if (profileExists) {
                //.map() ta gamla listan och loopa igenom, om profil id stämmer överrens = ta med det gamla i current profil och det nya innehållet in i nya listan. :profile= lämna alla andra profiler som de är.
                return currentProfiles.map((profile) => profile.id === id ? {...profile, story: story} : profile);
            } else {
                return [...currentProfiles, { id: id, name: name, story: story, houseImage: defaultHouseImage}];
            }
        });
    };

    //Spara ner DreamHouse
    const saveDreamHouse = (id, name, houseImage) => {
        //currentProfiles är parameter med de sparade profiler som finns i localstorage just nu
        setSavedProfiles(currentProfiles => {
            //Kolla om objektet för personan redan skapats när man tryckt på spara story genom id.
            const profileExists = currentProfiles.find((profile) => profile.id === id);

            if (profileExists) {
                //.map() ta gamla listan och loopa igenom, om profil id stämmer överrens = ta med det gamla i current profil och det nya innehållet in i nya listan. :profile= lämna alla andra profiler som de är.
                return currentProfiles.map((profile) => profile.id === id ? {...profile, houseImage: houseImage} : profile);
            } else {
                return [...currentProfiles, { id: id, name: name, story: "You didn't save a story with this house Darling <3", houseImage: houseImage}];
            }
        });
    };

    //Ta bort profil funktion
    const deleteProfile = (profileToDelete) => {
        setSavedProfiles(savedProfiles.filter(profile => profile.id !== profileToDelete));

    }


    return (
      <SavingContext.Provider 
        value={{ 
        savedProfiles, 
        saveStory, 
        saveDreamHouse, 
        deleteProfile 
    }}
    >
      {children}
    </SavingContext.Provider>
  );
};

export const useSavingContext = () => {
  return useContext(SavingContext);
};