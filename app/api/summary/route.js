import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { desc } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Ringkas teks berikut menjadi maksimal 300 karakter, padat, jelas, dan informatif:
      "${desc}"
    `;

    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    return new Response(JSON.stringify({ summary }), { status: 200 });
  } catch (error) {
    console.error("Error generating summary:", error);
    return new Response(JSON.stringify({ error: "Gagal membuat ringkasan" }), { status: 500 });
  }
}
  