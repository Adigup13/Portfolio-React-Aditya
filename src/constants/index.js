import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Zealous and meticulous professional with a recent MCA degree, eager to secure an entry-level position as a Software Developer. Proficient in the MERN stack with substantial hands-on project experience, I bring exceptional problem-solving skills and a strong passion for adopting new technologies. I am enthusiastic about contributing to an innovative development team, where I can leverage my skills to refine software development methodologies and drive impactful solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer passionate about creating efficient
 and user-friendly web applications. With expertise in React, Next.js, Node.js, TypeScript, and databases 
 such as MySQL, PostgreSQL, and MongoDB ORM Prisma, I thrive on solving complex problems and delivering high-quality solutions. 
 My journey in web development began with a deep curiosity for systems and has evolved into a career where I embrace new challenges and 
 technologies. I excel in collaborative environments, enjoy exploring emerging technologies, 
and actively contribute to open-source projects beyond coding.`;

export const EXPERIENCES = [
  {
    year: "December 2021 - November 2022 ",
    role: "Chatbot Implementation Specialist (Remote)",
    company: "ORAI",
    description: `Led the development of Chatbot user interaction flows, optimizing user experience and engagement.
 Implemented Chatbot solutions for diverse clients, leveraging APIs and JSON for backend integration. 
 Designed intuitive front-end interfaces and streamlined user flows to enhance customer engagement.
 Ensured seamless communication channels between clients and Chatbot systems. `,
    technologies: ["Javascript", "API", "PostMan"],
  }
];

export const PROJECTS = [
  {
    title: "Apple Vision Pro Landing Page",
    image: project1,
    description:
      "I created an engaging and visually striking landing page for Apple Vision Pro Utilizing advanced animation libraries such as ScrollTrigger, GSAP, and Locomotive Scroll, I implemented sophisticated animations and interactions that brought the page to life",
    technologies: ["HTML", "CSS", "JavaScript", "ScrollTrigger", "GSAP", "Locomotive Scroll"],
  },
  {
    title: "Google Gemini ChatBot",
    image: project2,
    description:
      "I developed a Google Gemini clone using React.js and Tailwind CSS, incorporating  data through API integration",
    technologies: ["React Js", "Tailwind CSS", "API Integration"],
  },
  {
    title: "Chat Application Website",
    image: project3,
    description:
      "I developed a real-time chat application ",
    technologies: ["React Js", "Tailwind CSS", "MongoDb", "Express Js", "Socket Io", "Node Js"],
  }
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "M-755/756 Ganga Nagar Meerut (UP) ",
  phoneNo: "+91 7302956655",
  email:"adityagup15@gmail.com",
};
