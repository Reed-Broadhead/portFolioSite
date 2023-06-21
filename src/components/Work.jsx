import NavBar from "./NavBar"
import { motion } from "framer-motion"
import  WeatherApp  from "./allProjects/WeatherApp"
import IntroWork from "./allProjects/IntroWork"
import Store from "./allProjects/Store"

function Work() {

    return(
    
        <div className="w-full">
        <NavBar name={'My Work'}/>
        <IntroWork />
        <WeatherApp />
        <Store />

        </div>


    )
}

export default Work