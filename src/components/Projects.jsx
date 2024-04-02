import PageStructure from "./PageStructure"
import github from "../assets/github-mark-white.png"
import projects from "./allProjects/projectData"

function Projects () {
    const ProjectContent = projects.map((project) => (

            <div className=" w-[350px] h-[300px] m-1 shadow-lg  rounded-md hover:shadow-2xl">
                <div className=" w-[100%] h-1/2 ">
                    <img className="w-[100%] h-[100%] rounded-t-md" 
                    src={project.picture}></img>
                </div> 
                <div className="bg-sky-950 h-[50%]  rounded-b-lg ">

                    <div className=" flex border-b-2">
                        <h1 className="text-lg text-white w-1/2 ml-2">{project.name}</h1>
                        
                        <div className="w-1/2 flex flex-row-reverse">
                            <a href={project.github}><img src={github}  className=" w-[29px] h-[29px] mr-1 rounded-full hover:bg-blue-900"></img></a>
                        </div>
                    </div>
                    <div className="">
                        <p className=" text-gray-200 ml-3 italic">
                            {project.description}
                        </p>
                    </div>

                    
                </div>
            </div>  
        
    ))
    const shell = (
        <div className="flex flex-wrap justify-center">
            {ProjectContent}
        </div>
    )
    const data = {name: "Projects", body: shell}
    return(       
        <PageStructure data={data}/>
    )
}

export default Projects
