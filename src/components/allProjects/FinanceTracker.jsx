import TextStructure from "./TextStructure"
import projects from "./projectData"

function FinanceTracker() {

    return (
        <div className="flex justify-center h-[600px] bg-lightgreen">  
        <div className="flex w-2/3">



             <div className=" w-1/2 border ">
                 
             </div>

             <div className=" w-1/2">
                 <TextStructure  data={projects.FinanceTracker}/>
             </div>
             
         </div>
     </div>
    )
}
export default FinanceTracker