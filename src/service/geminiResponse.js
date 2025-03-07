import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Correct environment variable
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function geminiResponse(prompt) {
  console.log("Function called with prompt:", prompt);

  if (!prompt) {
    console.error("❌ No prompt provided");
    return;
  }

  if (!API_KEY) {
    console.error("❌ Missing API Key");
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    console.log("Generating content...");
    const result = await model.generateContent(prompt);

    if (!result) {
      console.error("❌ No response from Gemini API");
      return;
    }

    console.log("Raw result:", result); // Debugging log

    // Corrected way to extract text response
    const responseText = result?.response?.text?.();
    if (!responseText) {
      console.error("❌ No text in API response");
      return;
    }

    console.log("Gemini Response:", responseText);
    return responseText; // Return the response text
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

export default geminiResponse;
