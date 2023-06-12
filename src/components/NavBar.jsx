import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="flex left-0">
            {/* <h1 className="">yo</h1> */}
            
            <NavLink to="/aboutMe" className="bg-blue-900"> about me</NavLink>
            <NavLink to="/projects">projects </NavLink>
            <NavLink to="/blogs">blogs</NavLink>
        </div>
        </>
    )
}

export default NavBar