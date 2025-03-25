import type { Project } from "../types/project";

export const projects: Project[] = [
  {
      id: 1,
      title: "MyQuiz AI",
      description: "a trivia game that utilizes the power of AI to generate questions tailored to your interests and abilities. As stated by Simon Olsen, 'The Problem MyQuiz.AI is solving actually excites me!'",
      image: "https://storage.googleapis.com/lablab-static-eu/images/submissions/clfpxw0hb00ec356i12ixjkm1/clfo1bobu00d7356ip296jvbm_zxg13iu1_imageLink.jpg",
      tags: [
        "ChatGPT",
        "OpenAI Gym",
        "Redis",
        "Whisper",
        "GPT-3"
        ],
      demoUrl: "https://colab.research.google.com/drive/1U5hcjxtwibHSiSPDbMaECHqtc9zC1AYp#scrollTo=Io_i7VUd6wsD",
      githubUrl: "https://lablab.ai/event/chatgpt-api-and-whisper-api-global-hackathon/space-cats/myquiz-ai",
      featured: true
    },
    {
      id: 2,
      title: "CyberMaze",
      description: "an interactive game that helps the user learn the ways to avoid Cyber Crime/Breaches using various levels of mazes and a plethora of assets.",
      image: "https://lh3.googleusercontent.com/keep-bbsk/AFgXFlJOhe_0O5pjQtm4eS1gMwnDWvNf8uvchrkgdIxC2GX0oNHk83yyNfpdK9O7DitghVLz93qJgpPWM7ivrDeiRybqVL5lGCdaKg-sS9wNZzumvp8mY3RSug=s1080",
      tags: [
        "C#",
        "IBM Watson",
        "JavaScript",
        "Python",
        "Unity"
      ],
      demoUrl: "https://devpost.com/software/cyber-security-maze",
      githubUrl: "https://github.com/s-berdia/CyberMaze",
      featured: false
    },
    {
      id: 3,
      title: "findit.",
      description: "findit. is an intelligent shopping assistant designed to guide users through the decision-making process. By interacting with a natural language chatbot, users can specify their needs (e.g., “I need a phone with good battery life and a large display”). The chatbot leverages large language models (LLMs) and a vectorized product database to return 3-5 highly personalized product recommendations. It is also designed to allow users to tweak their preferences for an even better match.",
      image: "https://drive.google.com/file/d/1CeQkafImBN6tQiqvz6hcsKZVp6weJmSb/view",
      tags: [
        "Adobe Illustrator",
        "Alexa",
        "Amazon Web Services",
        "GitHub",
        "JavaScript",
        "MongoDB",
        "RAG",
        "Terraform",
        "Vue"
      ],
      demoUrl: "https://devpost.com/software/findit-lhqfgr",
      githubUrl: "https://github.com/ZacharyHampton/sunhacks-2024",
      featured: false
    }
];

