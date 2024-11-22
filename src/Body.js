import React  from "react";
import { Link } from "react-router-dom";
// import FormData from "./FormData";
const Body = () => {
  

//   
  return (
    <>
      <img alt="career" src="../Images/pexels-nilina-183033-584179.jpg" className="absolute w-full h-custom-height object-cover object-center"/>
      <div className="flex flex-col justify-center text-center mx-auto my-auto h-half-screen ">
        <div className="relative bg-gradient-to-r from-richBlack via-powderBlue to-platinum inline-block text-transparent bg-clip-text text-8xl font-serif font-extrabold incvert-0 ">Work Wise</div>
        <div className="relative font-serif font-extrabold text-2xl bg-gradient-to-r from-black invert-0 to-platinum inline-block text-transparent bg-clip-text">Your career is your journey, not a destination</div>
        
      </div>
      <div className="realtive text-richBlack p-4 hover:cursor-pointer hover:text-gray-300 invert-0 font-serif text-center text-4xl bg-columbiaBlue w-fit flex justify-center mx-auto rounded-2xl hover:bg-customBlue">
          <Link to={"/starttest"}>Get Started</Link>  
        </div>
      
    </>
  );
};


export default Body;
