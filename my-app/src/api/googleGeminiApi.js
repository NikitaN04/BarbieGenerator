import { GoogleGenAI } from "@google/genai";

//Skapar en en Ai
const ai = new GoogleGenAI({
    apiKey: import.meta.env.API_KEY
});

export async function generatePersonaWithAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}

generatePersonaWithAi();