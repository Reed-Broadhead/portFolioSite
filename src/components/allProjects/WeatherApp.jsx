import { motion } from "framer-motion"
import github from "../../assets/github-mark-white.png"
import reactIcon from "../../assets/react.svg"
import javaIcon from "../../assets/java-script.svg"
import play from "../../assets/play-button-o-svgrepo-com.svg"
// mt-[40px]
function WeatherApp() {

    return (
        <div className="flex justify-center h-[600px] bg-lightgreen">
            
            <div className="flex  w-2/3 ">
                <div className="flex justify-center flex-col  w-1/2">

                    <div className="h-3/4 ">

                        <div className="flex h-1/4  justify-center items-end">
                            <div className="border-b-2 border-brown mb-1">
                            <h1 className="text-4xl text-white mb-1">Weather App</h1>
                            </div>
                            
                        </div>

                        <div className="flex flex-col h-auto text-gray text-xl items-center  mt-2 ">
                            <h1> A weather application connecting users </h1>
                            <h1> to realtime weather data across the globe.</h1>
                        </div>

                        <div className="flex flex-col-3 justify-center  h-9">
                            <div>
                            <motion.img src={play} className="h-full rounded-full bg-white"
                            whileHover={{
                            rotate: [0, 180, 90, 270, 0],
                            
                            transition:{ 
                                duration: 3,
                                repeat: Infinity,  
                                repeatDelay: 0.8  
                            }
                            }}


                            ></motion.img>
                            </div>

                            <div className=" h-full w-1/3 border border-transparent flex justify-center ">

                            
                            <img className=" rounded-full bg-brown mr-1 h-full" src={reactIcon} />

                            <img className=" rounded-full bg-brown h-full" src={javaIcon} />

                            </div>

                            <div>
                                <img src={github} className="h-full"></img>
                            </div>

                        </div>
                        
                        <div className="flex flex-col   h-1/6 items-center mt-1 "> 

                            {/* <div className="flex justify-center  h-full w-full">
                                <img src={github}
                                className="h-full "
                                ></img>
                            </div> */}

                        </div>
                    </div>
                   
                </div>

                <div className="border w-1/2 ">
                    
                </div>
                
            </div>
        </div>
    )

}

export default WeatherApp