import React from "react"
import {useState, useRef} from "react"
import background from "../../assets/Rectangle.png"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

export default function ContactMe({contactRef}) {
	const form = useRef();
	
	const sendEmail = (e) => {
		e.preventDefault();
		    emailjs
		      .sendForm('service_sychnsz', 'template_8mubqb6', form.current, {
		        publicKey: 'SB-CHcEea6Ikqak62',
		      })
		      .then(
		        () => {
			  console.log('SUCCESS!');
		        },
		        (error) => {
		          console.log('FAILED...', error.text);
		        },
		      );
		form.current.reset();
	}

	const container = (x: any )  =>{

	return (
	<div className="w-full h-fit rounded-md bg-white/40 max-w-[400px] "  >
		{x}
	</div>) }

	return (
		<div className=" bg-black justify-center flex  " 
		style={{
		backgroundImage: `url(${background})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"}}
		ref={contactRef} >
			<div className="w-full grid grid-cols-1 max-w-[1280px] mb-10 ">

				<div className="w-full flex items-center justify-center lg:justify-start ">
					<h1  className=" text-5xl text-black font-title h-min mx-auto border-b-2 border-black mx-auto mt-4 px-2 lg:text-5xl lg:mx-5"> Email Me </h1>
				</div>

				<form ref={form} onSubmit={(e) => sendEmail(e)}
				className=" grid gap-6  justify-center mt-6 mx-auto rounded-md 
				lg:grid-cols-2 w-full max-w-[900px] bg-[#0057ff]/[20%] p-4 border border-black  ">
				
				<div className=" flex flex-col pl-2 h-[120px] justify-between ">
					{ [{lable:"Name PLZ", name:"user_name", type:"text" },
					   {lable: "Email Address", name:"user_email", type:"email"}].map((x: string ) => {
					 	const {lable, name, type} = x;
						return (
							<>
						        <label  className="text-white text-xl font-body lg:text-2xl mb-1 pl-2 ">{lable}</label>
							{
								container( 
									  <input type={type} name={name} 
									  className=" w-full rounded-md pl-2  text-xl lg:text-2xl 
									  bg-[#0057FF]/[30%] text-gray-100 " />
								)
							}
							</>
						)				
						}) }
					
					</div>	 
					{
						<div className="pl-2" > 
							<label className="text-white text-xl font-body lg:text-2xl pl-2">Your Message</label>
							{
							container(
							<textarea name="message" className=" w-full h-[120px] rounded-md pl-2 text-xl lg:text-2xl 
							bg-[#0057FF]/[30%] text-gray-100 placeholder:text-gray-100 h-full max-h-[100px] resize-none "/>)
							}
						</div>
					}
					<motion.button
					type="submit"
					value="Send"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					transition={{ type : "spring", stiffness: 400, damping: 10}}
					className="bg-[#0057FF]/[30%] text-white text-2xl w-2/4 mx-auto rounded-xl p-1 mx-auto 
					lg:col-span-2 lg:w-[200px] ">
					Send</motion.button>	
			   	</form>
			</div>		
		</div>
)
}
