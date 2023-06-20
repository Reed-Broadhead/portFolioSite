import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

function NavBar({name}) {
    const activeLink = " ml-5 text-lg text-white pl-1 pr-1 "
    const notActive = "ml-5 pl-1 pr-1 text-lg text-gray-300 hover:text-white"
    return (
        
        <motion.div className="fixed top-0 w-screen"
        
        // initial={{ opacity: 0.8 }}
        // animate={{ opacity: 1 }}
        // transition={{duration: 0.8}}
        
        >
        <div className="flex h-16 items-center text-slate-700 bg-gray-800 ">

            <div className="w-1/6 ">
            <NavLink className={ ({isActive, isPending }) => (isActive ? activeLink : notActive) }
            to="/homepage">Homepage</NavLink>

            {/* <NavLink className={ ({isActive, isPending }) => (isActive ? activeLink : notActive) }
            to="/projects">projects</NavLink> */}


            <NavLink className={ ({isActive, isPending }) => (isActive ? activeLink : notActive) }
            to="/work">Work</NavLink>          

            </div>

            <div className="bg-gray-800 h-16 flex text-center justify-center pt-4 w-4/6 mb-3">
            <motion.div className=" flex items-center justify-center border-y-2 border-gray-400 w-screen text-white h-12 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 2
                }}
            >
                <h1 className="text-[25px]">{name}</h1>
            </motion.div>
        </div>

            <div className="w-1/6 flex flex-row-reverse ">
                <h1 className="mr-5 text-lg text-white">hello</h1>
            </div>

        </div>

        </motion.div>
    )
}

export default NavBar