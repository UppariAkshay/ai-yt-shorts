import { NextResponse } from "next/server";

const { GenerateScript } = require("@/configs/GeminiAi");

let PROMPT = 'Create two scripts for 30 sec video for Topic: {selectedTopic} 1) Do not add anything in the script like braces or anything 2) Do not add any pause or play in between just return the plain script in this format {script: " your plain script without any Create two scripts for 30 sec video for Topic: space mystries. 1) Do not add anything in the script like braces or anything 2) Do not add any pause or play in between just return the plain script in this format {script: " your plain script without any braces should be here. Reading this plain text should cover 30 sec time"}'

export async function POST(req)
{
    const body = await req.json();
    const {topic} = body
    const SCRIPT_PROMPT = PROMPT.replace('{selectedTopic}', topic)
    console.log(SCRIPT_PROMPT)

    const result = await GenerateScript.sendMessage(SCRIPT_PROMPT)
    const resp = result?.response?.text()
    
    return NextResponse.json(JSON.parse(resp));
}


// import { NextResponse } from "next/server";
// const { GenerateScript } = require("@/configs/GeminiAi");

// let SCRIPT_PROMPT = `Create two scripts for a 30-sec video for Topic: {selectedTopic}.
// 1) Do not add anything in the script like braces or anything.
// 2) Do not add any pause or play in between. Just return the plain script in this format:
// { "script": "your plain script without any braces should be here. Reading this plain text should cover 30 sec time." }`;

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { topic } = body;

//     if (!topic) {
//       return NextResponse.json({ error: "Topic is required" }, { status: 400 });
//     }

//     // 🔍 Corrected: Replace and store the updated prompt
//     const prompt = SCRIPT_PROMPT.replace("{selectedTopic}", topic);

//     // 🔍 Corrected: Pass prompt as argument
//     const result = await GenerateScript.sendMessage(prompt);

//     // 🔍 Corrected: Await text() function
//     const resp = await result?.response?.text();

//     if (!resp) {
//       return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
//     }

//     return NextResponse.json(JSON.parse(resp));
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
