import { GoogleGenAI } from "@google/genai";

//Skapar en AI
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_API_KEY
});

//funktionen skickar en prompt till gemini.
export async function generatePersonaWithAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}