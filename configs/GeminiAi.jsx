const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Create two scripts for 30 sec video for Topic: space mystries. 1) Do not add anything in the script like braces or anything 2) Do not add any pause or play in between just return the plain script in this format {script: \" your plain script without any Create two scripts for 30 sec video for Topic: space mystries. 1) Do not add anything in the script like braces or anything 2) Do not add any pause or play in between just return the plain script in this format {script: \" your plain script without any braces should be here. Reading this plain text should cover 30 sec time\"}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "{script: \"Ever wondered what secrets the universe holds? We're just scratching the surface. Dark matter, a mysterious substance, makes up most of the universe but remains invisible. What is it made of? Then there are black holes, cosmic vacuum cleaners, swallowing everything, even light. What happens inside? Exploding stars called supernovas leave behind neutron stars so dense a teaspoon weighs billions of tons. And what about the Fermi Paradox? Why haven't we found other intelligent life out there? Space is vast and full of questions. Join us as we explore these cosmic puzzles, seeking answers to the universe's greatest mysteries, one star at a time. Subscribe to uncover the cosmic unknown.\"}\n\n{script: \"Journey beyond Earth, to the edge of known space. Prepare to be amazed by cosmic enigmas. Is there a Planet Nine lurking in the distant solar system? Could it explain unusual orbits? The Great Attractor, a gravitational anomaly, is pulling galaxies towards it. What is its source? Fast Radio Bursts, brief blasts of radio waves, come from galaxies far away. Are they natural or something else? And wormholes, theoretical shortcuts through space and time, could they be real? Space mysteries are waiting to be unraveled. Explore with us, and let's solve the secrets of the universe, one mystery at a time. Subscribe for cosmic content!\"}\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
