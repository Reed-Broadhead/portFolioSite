// import PageStructure from "./PageStructure"
import NavBar from "./NavBar"
import background from '../assets/background.png'
import background2 from '../assets/Rectangle.png'
import About from "./pageSections/About"
import ContactMe from "./pageSections/ContactMe"
import Projects from "./pageSections/Projects"
import { motion } from "framer-motion"
import { useScroll, useMotionValueEvent } from "framer-motion"

import { useRef } from "react"
// import { Canvas } from '@react-three/fiber'



function HomePage() {

    const about = useRef();
    const projects = useRef();
    const contact = useRef();
    return(
        <>
        {/* <NavBar name={'HomePage'}/> */}
        

            <div
            style={{                
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'}}
                className="h-screen w-full flex flex-col ">
                
                    <NavBar about={about} projectRef={projects} contactRef={contact} />


                <motion.div 
			initial={{ opacity: 0 }}
	    		animate={{ opacity: 1 }}
	    		transition={{ duration: 1.5, delay: 0.5}}
	    		className="flex flex-col  items-center justify-center text-4xl h-2/4 font-body ">Software Developer</motion.div>
                
            </div>

            <div
            ref={about}
            style={{                
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}
            className=" w-full flex flex-row justify-between">      

                <About/>

            </div>


            <Projects projectRef={projects}/>
	    <ContactMe contactRef={contact}/>
	 
	    </>
    )
}

export default HomePage
