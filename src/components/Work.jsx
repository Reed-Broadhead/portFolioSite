import NavBar from "./NavBar"
import { motion } from "framer-motion"
import  WeatherApp  from "./allProjects/WeatherApp"
import IntroWork from "./allProjects/IntroWork"

function Work() {

    return(
        <>
        <div className="w-screen">
        <NavBar name={'My Work'}/>
        <IntroWork />
        {/* <WeatherApp /> */}


        </div>

        </>

    )
}

export default Work