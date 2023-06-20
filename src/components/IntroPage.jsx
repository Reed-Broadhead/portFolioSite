import { NavLink } from "react-router-dom"

function IntroPage() {

    return (
        <>
        <div className="bg-gray-700 h-screen flex justify-center">
            <div className="mt-[180px]">
                <NavLink  className="" to="/homepage" >Homepage</NavLink>
            </div>
            
        </div>
        </>
    )
}

export default IntroPage