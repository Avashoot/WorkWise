import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "./userContext";
import demoCredentials from "./demoEmails";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setSignInedUserData} = useContext(userContext);

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        const userData = demoCredentials.find(
            (data) => data.email === email && data.password === password
        );

        if (!userData) {
            alert("Invalid Email or Password. Please check your credentials.");
        } else {
            // Update the context with the user's data
            setSignInedUserData({
                firstName: userData.firstName,
                email: userData.email,
                id: userData.id,
                imageUrl: userData.imageUrl,
            });
            navigate("/")
            alert(`Welcome, ${userData.firstName}!`);
        }
    }

    return (
        <>
            <div className="bg-gradient-to-b from-customBlue flex flex-col mx-auto w-5/12 rounded-2xl p-10 shadow-xl shadow-slate-600 justify-center text-white my-28">
                <div className="text-center font-light p-4  font-serif text-3xl">SIGN UP</div>
                <div className="w-auto font-serif font-lite">
                    
                    
                    <div className="flex justify-between p-4 ">
                        <div className="p-2 text-lg">Email Id :</div>
                        <div>
                            <input type="email" placeholder="abc@mail.com" className="border border-black p-2 w-72 text-base text-black" onChange={(e) => setEmail(e.target.value)} />

                        </div>
                    </div>
                    <div className="flex justify-between p-4 ">
                        <div className="p-2 text-lg text-gray-500">Password :</div>
                        <div>
                            <input type="password" placeholder="Password" className="border border-black p-2 w-72 text-base text-black" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    
                </div>



                <div className="text-center font-serif text-pretty text-xl p-4 bg-blue-500 w-fit mx-auto rounded-xl px-8 text-white hover:cursor-pointer hover:bg-blue-400 my-5" onClick={handleSubmit}>Sign In</div>

                <div className="text-black flex justify-end">New user 
                    <div className="mx-3 text-pretty text-blue-700">
                        <Link to={"/signup"}>register here</Link>
                    </div>    
                </div>

            </div>
        </>
    )
}

export default Login;