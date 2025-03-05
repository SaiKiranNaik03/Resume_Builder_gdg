import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY; // Correct environment variable

async function geminiResponse(prompt) {
  if (!prompt) {
    console.error(
      "❌ Prompt is missing. Please provide a prompt for the AI model."
    );
    return;
  }

  if (!API_KEY) {
    console.error("❌ Google API Key is missing. Check your .env file.");
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(
      `Professional title: ${prompt}. Based on this, generate a professional summary for a resume.`
    );

    const response = await result.response;
    console.log(response.text()); // Corrected way to get the text response

    return response.text(); // Return the result for further usage
  } catch (error) {
    console.error("❌ Error fetching AI response:", error);
  }
}

export default geminiResponse;
