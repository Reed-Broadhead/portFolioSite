import NavBar from "./NavBar"
function PageStructure({data}) {

    return (

        <>
        <div className="flex flex-col h-screen">
        <NavBar />

        <div className="bg-gray-800 h-16 flex text-center justify-center pt-4">
            <div className=" flex items-center justify-center border-y-2 border-gray-400 w-3/4 text-white h-12 ">
                <h1 className="text-[25px]">{data.name}</h1>
            </div>
        </div>

        <div className="flex h-screen bg-gray-800 justify-center ">
            <div className="mt-20 w-3/4">
            {data.body}
            </div>
        </div>
     

        </div>



        </>
    )
}

export default PageStructure