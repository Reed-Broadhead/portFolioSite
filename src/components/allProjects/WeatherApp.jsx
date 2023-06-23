import { motion } from "framer-motion"
import TextStructure from "./TextStructure"
import projects from "./projectData"

function WeatherApp() {


    return (
        <div className="flex justify-center h-[600px] bg-lightgreen">  
           <div className="flex w-2/3">

                <div className=" w-1/2">
                    <TextStructure  data={projects.WeatherApp}/>
                </div>

                <div className=" w-1/2 border ">
                    
                </div>
                
            </div>
        </div>
    )

}

export default WeatherApp