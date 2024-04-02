import React from 'react';
import background2 from "../../assets/Rectangle.png";
import github from "../../assets/github-mark-white.png"
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react"
import {projects, Project} from "./information/projectData"



export default function Projects({projectRef}) {

    const [stuff, setStuff] = useState(
        {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
        }
    )
    const handleClick = (ind) => {
        setStuff({
            ...stuff,
            [ind]: !stuff[ind]
        })
    }
    // console.log(window.innerWidth)
    return (
        <div
        style={{                
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}
        className=' pb-4 '>

            <div ref={projectRef} 
            className=" w-full m-auto grid h-full  lg:grid-cols-2 gap-6 justify-around max-w-[1280px] mb-5 ">  
	    	<div className="w-full flex justify-center lg:justify-start ">
	    	<h1 className="text-black text-5xl font-title border-b-2 border-black w-min mt-4 px-2 lg:text-5xl lg:mx-5 ">Projects</h1>
                </div>
		{
                    projects.map((project: Project, index) => {
                        // console.log(project.techStack)
                        return(
                            // large container
                            <div className={ project.style ? "h-46 flex justify-center items-center lg:col-span-2" : "h-46 flex justify-center items-center"}
                            key={index}
                            // style={{gridColumn: window.innerWidth >= 1024 ?  project.style : "span 1 / span 1"}}
                            >
                                {/* image background  */}
                                <div
                                className='w-[75%] h-[225px]  rounded-lg flex shadow-lg'
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'top'}}>
                                    {/* darkness image */}
                                    <div className="w-full h-full flex flex-col  bg-black/80 rounded-lg">

                                        {/* the div that animates */}
                                        <AnimatePresence mode="wait">
                                            <motion.div 
                                            key={stuff[index] ? stuff : "empty"}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='flex flex-col items-center cursor-pointer h-full w-full'
                                            onClick={() => handleClick(index)}
                                            > 
                                                { stuff[index] ?
                                                // first part
                                                <>
                                                    <div className='flex w-full h-[30%] max-w-[500px]  justify-center '>
                                                        <h1 className="text-white text-4xl font-title border-b border-gray-300 w-3/4  h-min  text-center mt-auto">{project.title}</h1>                                                
                                                    </div>
                                                    <p className=" w-4/6 mt-2 text-white text-xl text-center font-body">{project.description}</p>
                                                </>
                                                : 
                                                // second part
                                                <>
                                                    <div className='flex flex-row-reverse  h-[30%] w-full mb-2'>
                                                        <div className='w-1/6 pt-1 flex flex-row-reverse'>
                                                            <a className="cursor-auto" onClick={(e) => {e.stopPropagation()}} 
                                                            href={project.link} target="_blank" rel="noopener noreferrer">
                                                                <img className=" h-10 pr-2" src={github} alt="hi"/>
                                                            </a>
                                                        </div>

                                                        <h1 className='text-white text-4xl border-b w-4/6 mt-auto text-center font-title '>Tech Stack</h1>
                                                    </div>

                                                    <div className='grid grid-cols-3 w-1/2 gap-4 max-w-[240px] '>
                                                        {project.techStack.map((tech: string, index) => {
                                                            
                                                            return (
                                                                
                                                                // <p key={index} className=" text-white text-xl border mx-auto"> {` ${tech} `}</p>
                                                                <div className='flex justify-center bg-black/60 rounded-lg max-w-[100px]'>
                                                                        <img className=" w-1/2 m-2  "src={tech} alt="missing"/>
                                                                    </div>
                                                                    )
                                                                })}
                                                    </div>
                                                    
                                                </>
                                                }
                                            </motion.div>
                                        </AnimatePresence>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
