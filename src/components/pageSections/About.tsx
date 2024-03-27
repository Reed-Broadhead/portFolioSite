import React from "react"
import { motion } from "framer-motion"

import filler from "../../assets/filler.png"
import github from "../../assets/github-mark-white.png"
import linkIn from "../../assets/linkedin.png"
import medium from "../../assets/medium.png"

import { arrayBuffer } from "stream/consumers"

let socials: {name: string, link: string, image: string, color: string}[] = [
    {
        name: "GitHub",
        link: "https://github.com/Reed-Broadhead",
        image: github,
        color: "black"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/reed-broadhead",
        image: linkIn,
        color: "blue"
    },
    {
        name: "Medium",
        link: "https://medium.com/@reedbroadhead",
        image: medium,
        color: "Black"
    }
]
export default function About() {

    const openInNewTab = (url: string) => { 
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
        <div className="flex flex-col mb-10">
            {/* top section */}
            <div className=" w-full h-[70%] flex-row flex"> 

                {/* Top Left */}
                <div className=" w-1/2 h-full flex-col"> 

                    {/* section name */}
                    <h1 className="text-5xl text-white underline text-black mt-5 ml-10">About Me</h1>

                    {/* text */}
                    <p className="ml-20 w-[70%] mt-8 text-lg">Hello. I am Reed Broadhead, a dedicated and driven 
                    software developer from the DFW area and a recent Flatiron graduate. I am currently searching for a full-stack dev job,
                    and expanding my knowledge to allow myself to widen the pool of jobs I am qualified for.</p>

                    <p className="ml-20 w-[70%] mt-2 text-lg">Hello. I am Reed Broadhead, a dedicated and driven 
                    software developer from the DFW area and a recent Flatiron graduate. I am currently searching for a full-stack dev job,
                    and expanding my knowledge to allow myself to widen the pool of jobs I am qualified for.</p>

                    <p className="ml-20 w-[70%] mt-2 text-lg">Hello. I am Reed Broadhead, a dedicated and driven 
                    software developer from the DFW area and a recent Flatiron graduate. I am currently searching for a full-stack dev job,
                    and expanding my knowledge to allow myself to widen the pool of jobs I am qualified for.</p>

                </div>

                {/* Top Right */}
                <div className="w-1/2 h-full  flex items-center justify-center">
                    <img className="object-cover w-2/3 h-3/4" src={filler}></img>
                </div>

            </div>
                
            {/* bottom section */}
            <div className=" w-full h-[30%] flex flex-row justify-around items-center px-[15%]">
                {socials.map((element) => {
                        return (
                            <motion.div
                            className="h-[150px] w-[250px] rounded-md flex flex-col items-center justify-end  text-white"                 
                            onClick={() => openInNewTab(element.link)}
                            key={element.name}
                            whileHover={{scale: 1.02}}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            style={{                
                                // backgroundImage: `url(${element.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundColor: element.color}}
                            
                            >
                                <img className="w-1/3"src={element.image}></img>
                                <h1 className="my-1 text-2xl">{element.name}</h1>
                            </motion.div>                
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

