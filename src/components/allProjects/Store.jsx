import TextStructure from "./TextStructure"
import projects from "./projectData"
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cash from "./ThreeDModles/Cash"
// environment="city"
function Store() {

    return (
        <div className="flex justify-center h-[600px] bg-lightgreen">  
        <div className="flex w-2/3 ">

            <div className="w-1/2">
                
                 <Canvas>
                    <Stage environment="city" intensity={0.6}>
                        <Cash />
                    </Stage>
                    <OrbitControls  enableZoom={false} />
                 </Canvas>
                 
            </div>

             <div className=" w-1/2 ">
                 <TextStructure  data={projects.Store}/>
             </div>

             
             
         </div>
     </div>
    )
}

export default Store