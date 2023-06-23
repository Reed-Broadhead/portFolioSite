import { motion} from "framer-motion"
import github from "../../assets/github-mark-white.png"
import reactIcon from "../../assets/react.svg"
import javaIcon from "../../assets/java-script.svg"
import play from "../../assets/play-button-o-svgrepo-com.svg"



function TextStructure( {data} ) {
    
    const Icons = data.icons.map((icon) => {
        return (
            <img className=" rounded-full bg-brown mx-1 h-full" src={icon} />
        )
    })
    return (

        <motion.div className="flex  justify-center flex-col  w-full h-full r"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
            delay: 0.8,
            duration: 0.5
        }}
        >

        <div className="h-3/4 flex flex-col items-center">

            <motion.div className="flex h-1/4  justify-center items-end "
           
            
            >
                <div className="border-b-2 border-brown mb-1">
                <h1 className="text-4xl text-white mb-1">{data.name}</h1>
                </div>
                
            </motion.div>

            <div className="flex  justify-center  h-auto text-gray text-xl 
             mt-2 w-2/3 ">
                <h1 className="  text-center ">{data.description}</h1>
                
            </div>

            <div className="flex flex-col-3 justify-center  w-full h-9">
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
                    {Icons}           
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
       
    </motion.div>
    )
}

export default TextStructure