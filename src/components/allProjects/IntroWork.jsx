import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'
import projects from "./projectData"

function IntroWork() {

  console.log(projects)
  // const firstThree =

  const mappedProjects =  Object.values(projects).map(project => {
    return (
      <Tilt tiltReverse={true} >
          <motion.div className="border border-brown w-[250px] h-[300px] bg-green
          flex flex-col items-center mx-3 rounded-xl shadow-xl"
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{
            delay: project.order,
            duration: 2, 
            
          }}
          
          >
            <h1 className="mt-20 text-white text-xl">{project.name}</h1>

            
            <motion.button className="bg-white w-20 h-10 rounded-full mt-20 
            border-2 shadow-lg border-brown"
            whileHover={{scale: [null, 1.1]}}
            transition={{ duration:0.3}}
            
            ></motion.button>
          </motion.div>
        </Tilt>
    )
  })

  console.log(mappedProjects)

    return(

        <div 
        className=" w-full h-screen mt-[60px] flex flex-col border
        bg-lightgreen items-center">

          <motion.div className=" h-1/4 flex items-center text-3xl text-white "
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 1
            }}
          >
            <h1 className=""> Chech out my work</h1>
          </motion.div>

          <div className="flex flex-row justify-center w-full  ">
            {mappedProjects}
          </div>
        


        </div>
        
        

        
    )
}

export default IntroWork