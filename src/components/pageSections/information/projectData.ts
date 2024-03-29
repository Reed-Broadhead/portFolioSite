import overnight from "../../../assets/overnight.png"
import github from "../../../assets/github-mark-white.png"
import Flask from "./ProjectTechImages/Flask.webp"
import JS from "./ProjectTechImages/JS.webp"
import Node from "./ProjectTechImages/Node.webp"
import React from "./ProjectTechImages/React.webp"
import TypeScript from "./ProjectTechImages/TypeScript.webp"
import Tailwind from "./ProjectTechImages/tailwind.svg"
import Rust from "./ProjectTechImages/Rust.webp"
import Python from "./ProjectTechImages/Python.webp"
import Express from "./ProjectTechImages/Express.webp"

export interface Project { 
    title: string,
    description: string,
    image: string,
    link: string,
    techStack: any[],
    style?: boolean
}



export const projects: Project[] = [
    {
        title: "Overnight",
        description: "Overnight is a hotel booking site, designed to find the best deals and the hottest stays!",
        image: overnight,
        link: "https://www.google.com",
        // techStack: ["React", "Ruby on Rails", "PostgreSQL", "hi", "yo"],
        techStack: [TypeScript, React, Tailwind, Node, Express ],
        style: true
    },
    {
        title: "VC-Connects",
        description: "This is a description of project ",
        image: overnight,
        link: "https://www.google.com",
        techStack: [JS, React, Tailwind, Node, Express ],
    },

    {
        title: "ShopHaven",
        description: "ShopHaven is a full stack e-commerce site, to help users to sell items and find the best prices!",
        image: overnight,
        link: "https://www.google.com",
        techStack: [JS, React, Tailwind, Node, Express ],   
     },
    {
        title: "Cove",
        description: "Cove is a messsaging site made to help users connect and chat with friends and family!",
        image: overnight,
        link: "https://www.google.com",
        techStack: [JS, Python, React, Tailwind, Flask],   
     },
    {
        title: "TicTacToe",
        description: "This is a CLI tic-tac-toe game made with Rust where users play agains an AI opponent",
        image: overnight,
        link: "https://www.google.com",
        techStack: [Rust],   
     },
  
]