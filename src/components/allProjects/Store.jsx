import TextStructure from "./TextStructure"
import projects from "./projectData"
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cash from "./ThreeDModles/Cash"
// environment="city"
function Store() {

    return (
        <div className="flex justify-center h-[600px] bg-black">  
        <div className="flex w-2/3 ">

            <div className="w-1/2 flex items-center justify-center ">
                <div className=" h-2/3 w-full ">
                 <Canvas camera={{ zoom: 0.5}}>
                    <Stage environment="city" intensity={0.5}>
                        <Cash />
                    </Stage>
                    <OrbitControls   enableZoom={false} />
                 </Canvas>
                 </div> 
            </div>

             <div className=" w-1/2 ">
                 <TextStructure  data={projects.Store}/>
             </div>

             
             
         </div>
     </div>
    )
}

export default Store