import React from "react"
import { motion } from "framer-motion"

import filler from "../../assets/filler.png"
import github from "../../assets/github-mark-white.png"
import linkIn from "../../assets/linkedin.png"
import medium from "../../assets/medium.png"
import headshot from "../../assets/ReedsHeadshot2.jpg"
// import { arrayBuffer } from "stream/consumers" 

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
export default function About() {About

    const openInNewTab = (url: string) : void => { 
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
        
        <div className="grid lg:grid-cols-2 mb-10 max-w-[1280px] h-min mx-auto ">
            {/* top section */}
           <div className="lg:col-span-2 flex justify-center lg:justify-start ">
                <h1 className="text-5xl text-black font-title h-min border-b-2 border-black w-fit text-black mt-5 mb-5 text-center lg:ml-5 lg:text-start  ">About Me</h1>
	   </div>
                {/* Top Left */}
                <div className="  h-min flex-col text-center px-10 "> 

                    {/* text */}
                    <p className=" font-body w-full mt-2 text-md md:text-xl lg:text-2xl">Hello. I am Reed Broadhead, a dedicated and driven 
                    software developer from the DFW area and a recent Flatiron graduate. I am currently searching for a full-stack dev job,
                    and expanding my knowledge to allow myself to widen the pool of jobs I am qualified for.</p>

                    <p className=" font-body w-full mt-2 text-md md:text-xl lg:text-2xl">With a strong foundation in JavaScript, React, Nodejs, Express, Prisma, Python, Flask, and SQL, I'm passionate about creating innovative solutions to complex problems. My goal is to craft seamless user experiences while maintaining robust,  and scalable code. I firmly believe in continuous learning, and I'm always eager to explore new languages, frameworks, and tools.</p>

                    <p className=" font-body w-full mt-2 text-md md:text-xl lg:text-2xl">I'm eager to connect with like-minded professionals and organizations that share my enthusiasm for innovation. If you're looking for a dedicated developer who's always up for a challenge, don't hesitate to reach out to me!</p>

                </div>

                {/* Top Right */}
                <div className="w-full   flex items-center justify-center  ">
                    <img className="object-cover w-2/3 h-3/4 rounded-md shadow-lg " src={headshot}></img>
                </div>

  
                
            {/* bottom section */}
            <div className=" flex flex-row justify-around items-center px-[15%] lg:col-span-2 mt-10 ">
                {socials.map((element) => {
                        return (
                            <motion.div
                            className=" pt-2 w-1/4 rounded-md flex flex-col items-center   text-white"                 
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
                                <h1 className="text-md lg:text-xl py-1">{element.name}</h1>
                            </motion.div>                
                        )
                    })
                }
            </div>
        </div>
    </>
    )
}

