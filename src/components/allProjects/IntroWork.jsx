import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'

function IntroWork() {

    return(

      

        <div 
        className=" w-screen h-[400px] mt-[60px] flex flex-col
        bg-gradient-to-r from-cyan-500 to-blue-500"
        >
        {/* first */}
        <motion.div className=" w-screen h-1/3 mt-1 
        flex items-center justify-center text-lg
        bg-gradient-to-r from-cyan-500 to-blue-500"
        
        initial={{x: -1000}}
        animate={{x: 0}}
        transition={{duration: 2, type: "tween"  }}
        >
          <motion.h1 className="text-white"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{
         delay: 2,
         duration: 0.7
        }}

          
          >Checkout My Projects</motion.h1>
        </motion.div> 
        {/* second */}
         <motion.div className=" w-screen h-1/3 
         flex items-center justify-center
        bg-gradient-to-r from-cyan-500 to-blue-500"
        
        initial={{x: 1000}}
        animate={{x: 0}}
        transition={{duration: 2, type: "tween"  }}
        >

        <Tilt tiltReverse={true} >
          <motion.div className="border border-blue-950  w-[120px] h-[120px] bg-red-300
          flex flex-col items-center"
          initial={{opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1
          }}
          
          >
            <h1 className="mt-5">Weather App</h1>
            <button className="bg-green-900 w-12 h-5 mt-5 rounded-md"></button>
          </motion.div>
        </Tilt>

        </motion.div>

        {/* third */}
        <motion.div className=" w-screen h-1/3 border-b
        bg-gradient-to-r from-cyan-500 to-blue-500"
        
        initial={{x: -1000}}
        animate={{x: 0}}
        transition={{duration: 2, type: "tween"  }}
        >
            
        </motion.div>
        {/* fourth */}
        {/* <motion.div className=" w-screen h-1/4  
        bg-gradient-to-r from-cyan-500 to-blue-500"
        
        initial={{x: 1000}}
        animate={{x: 0}}
        transition={{duration: 2, type: "tween"  }}
        >
            
        </motion.div> */}

        </div>
        
        

        
    )
}

export default IntroWork