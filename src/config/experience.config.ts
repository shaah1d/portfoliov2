import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Freelance Developer",
    employmentType: "Freelance",
    company: {
      name: "Self-employed",
      url: "#",
    },
    location: {
      name: "Remote",
    }, 
    start: "December 2024",
    end: "Present",
    description: [
      "Developed custom web applications and e-commerce solutions for multiple clients",
      "Built responsive websites using React, Next.js and modern frontend technologies",
      "Provided technical consulting and solutions architecture for small businesses",
      "Tech: React, Next.js, TypeScript, Node.js, MongoDB, Tailwind , Framer Motion, AWS"
    ],
  },
  {
    title: "Software Engineer",
    employmentType: "Full time",
    company: {
      name: "RMSI (Client - Apple Inc) ",
      url: "https://radicalhealth.care",
    },
    location: {
      name: "Remote",
    },
    start: "October 2023",
    end: "December 2024",
    description: [
      "Engineered API for Apple Maps data translation & validation using Node.js/Express/MySQL",
      "Built data visualization tool with React/AWS for digitization analysis",
      "Led NextJS POC initiatives demonstrating scalable solutions",
      "Tech: NodeJS, Express, MySQL, NextJS, TypeScript, React, Tailwind, AWS"
    ],
  },
  
];