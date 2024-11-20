import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "./userContext";

const Header = ()=>{

    const {signInedUserData} = useContext(userContext);
    const navigate = useNavigate();

    const handleSignIn = ()=>{
        if(signInedUserData.firstName === "SIGN IN"){
            navigate("/signin")
        }else{
            navigate("/profile")
        }
    }
    return (
        <>
            <div className=" flex justify-between bg-gradient-to-r from-customBlue to-cyan-600">
                <Link to={"/"}>
                    <img alt="WorkWise Logo" src="../Images/Work Wise (1).png" className="w-52 hover:cursor-pointer m-2"/>
                </Link>
                
                <div className="flex flex-wrap font-serif font-lite">
                    
                    <div className=" m-3 p-4 hover:cursor-pointer hover:text-gray-300">Your Schedule</div>
                    <div className="ml-2 my-3 p-4 hover:cursor-pointer hover:text-gray-300" onClick={handleSignIn}>{signInedUserData.firstName}</div>
                    <img alt="Profile logo" src={signInedUserData.imageUrl} className="w-7 h-7 my-6 mr-5 bg-black rounded-full "/>
                </div>

            </div>
        </>
    )

}
export default Header;