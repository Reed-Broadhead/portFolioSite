import { useState, useEffect, useRef } from "react"

function NavBar({about, projectRef, contactRef}) {
    const [hasMoved, setHasMoved] = useState(false)

	window.addEventListener('scroll', () => { 
        if(window.scrollY > 0){
            setHasMoved(true)
        }})

    const handleScroll= (x) => {
        x.current?.scrollIntoView({behavior: 'smooth'})
    }
    useEffect(() => {
        if (window.innerWidth < 768) {
        } 
    }, [])
    
    return (
        <>
            <div 
            // style={{backgroundColor: hasMoved ? 'rgba(0,0,0,0.5)' : null }}
            className=" h-1/4 w-full ">
		<div className="h-min flex bg-black/70 lg:bg-black/0 flex-row items-center ">
                {/* Name */}
                <div className=" font-title flex flex-col w-full h-min pl-5 pt-1 pb-2 justify-center ">
                    <h1 className="text-2xl text-white lg:text-5xl"> REED</h1>
                    <h1 className="text-2xl text-white lg:text-5xl"> BROADHEAD</h1>
                </div>  
                
                {/* Text in center */}
                 <div className="h-min flex flex-col pr-4 pt-1 ">
                    <button onClick={() =>  handleScroll(about) } className=" text-2xl text-black w-fit lg:text-5xl mr-3 font-body ">About</button>
                    <button onClick={() => handleScroll(projectRef)} className="text-2xl text-black w-fit  lg:text-5xl ml-3 font-body"> Work</button>
                    <button onClick={() =>  handleScroll(contactRef) } className="text-2xl text-black w-fit lg:text-5xl font-body"> Contact </button>
                </div>
                
               </div> 
            </div>
        </>
    )
} 
export default NavBar

