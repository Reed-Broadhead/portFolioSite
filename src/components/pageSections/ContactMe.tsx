import {useState, useRef} from "react"
import background from "../../assets/Rectangle.png"
import { motion } from "framer-motion"

export default function AboutMe({contactRef}) {

const container = (x: any) => {
	return (
	<div className="w-full rounded-md bg-white/40">
		{x}
	</div>
)


}

return (
	<div className=" bg-black justify-center border border-white/0" 
	style={{
	backgroundImage: `url(${background})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center"}}
	ref={contactRef} >
		<div className="w-full grid grid-cols-1 mb-10 ">
			<h1 className=" text-4xl text-black h-min border-b mx-auto border-black mx-auto mt-4 px-2 ">Email Me </h1>
			<form className=" grid gap-6  justify-center mt-6 w-min mx-auto rounded-md ">
				{ ["Name PLZ", "Email Address"].map((x: string) => {	
					return (
						container(<input className=" rounded-md pl-2  text-xl bg-[#0057FF]/[30%] placeholder:text-white " placeHolder={x} />)
					)				
					}) }
				{
					 
				container(<textarea className=" w-full rounded-md pl-2  text-xl bg-[#0057FF]/[30%] text-white placeholder:text-gray-100 h-full " placeHolder="Name PLZ"/>) 
				}
				<motion.button 
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				transition={{ type : "spring", stiffness: 400, damping: 10}}
				onClick={(e) => { e.preventDefault()}} className="bg-[#0057FF]/[30%] text-white text-2xl w-2/4 mx-auto rounded-xl p-1 ">Send</motion.button>	
		   	</form>
		</div>		
	</div>
)
}
