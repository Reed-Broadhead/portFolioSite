import { useState } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import background from '../assets/background.png'

function NavBar({about, projectRef}) {
    const [hasMoved, setHasMoved] = useState(false)

    window.addEventListener('scroll', () => { 
        if(window.scrollY > 0){
            setHasMoved(true)
        }})

    const handleScroll = (x) => {
        x.current?.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <>
           {/* { hasMoved ? 
           <motion.div
            className="h-[165px] justify-between w-full fixed bg-black/50"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5 }}  
            /> : null} */}

            <div 
            // style={{backgroundColor: hasMoved ? 'rgba(0,0,0,0.5)' : null }}
            className="flex flex-row h-1/4 justify-between w-full ">

                {/* Name */}
                <div className="  mt-6 ml-5  h-min">
                    <h1 className="text-5xl text-white">REED</h1>
                    <h1 className="text-5xl text-white">BROADHEAD</h1>
                </div>  

                {/* Text in center */}
                <div className=" w-[287px] mr-5 flex flex-col mt-2 items-center  ">
                    <button onClick={() => handleScroll(projectRef)} className="text-5xl text-white w-fit text-black">Work</button>
                    <button onClick={() => handleScroll(projectRef)} className="text-5xl text-white ml-20  w-fit text-black">Contact</button>
                    <button onClick={() =>  handleScroll(about) } className="text-5xl text-white  w-fit ml-4 text-black">About</button>

                </div>
            </div>
        </>
    )
}

export default NavBar