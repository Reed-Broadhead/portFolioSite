// import PageStructure from "./PageStructure"
import NavBar from "./NavBar"
import background from '../assets/background.png'
import background2 from '../assets/Rectangle.png'
import About from "./pageSections/About"
import Projects from "./pageSections/Projects"
import { motion } from "framer-motion"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { useRef } from "react"
// import { Canvas } from '@react-three/fiber'



function HomePage() {

    const about = useRef();
    const projects = useRef();
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
                
                    <NavBar about={about} projectRef={projects}/>


                <div className="flex flex-col  items-center justify-center text-4xl ml-10 h-2/4 "> Software Developer</div>
                
            </div>

            <div
            ref={about}
            style={{                
            backgroundImage: `url(${background2})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}
            className="h-screen w-full flex flex-row justify-between">      

                <About/>

            </div>

            <Projects projectRef={projects}/>
        </>
    )
}

export default HomePage