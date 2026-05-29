import { GoogleGenAI } from "@google/genai";
/* -Valde att inte ta med import * as fs from "node:fs"; 
eftersom vi inte ska spara ner bilden i någon fil på datorn lokalt
-tog även bort buffer delen av koden då de hör ihop.
Referens: https://www.browserstack.com/guide/write-files-using-fs-writefilesync-in-node-js
*/

//Skapar en AI
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_API_KEY
});

//Text funktion - skickar en prompt till gemini.
export async function generatePersonaWithAi(prompt) {
    //Anropa API och skicka med prompten vi skapade innan -Detta är nätverksanropet
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}

//Bild funktion - tar emot imagePrompt och skickar till gemini
export async function generateDreamHouseWithAi(imagePrompt) {
    //Anropa API och skicka med prompten vi fick ut av tidigare AI anrop innan -Detta är nätverksanropet
    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-image-preview",
        contents: imagePrompt,
    });

    //Loopa igenom svaret och returnera datan
    for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
            return part.inlineData.data;
        }
    }
    //Om det gick snett throw error. 
    throw new Error ("Ingen bilddata hittades i AI-svaret");

}