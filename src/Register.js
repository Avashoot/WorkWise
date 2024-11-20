import { useEffect, useState , } from "react";
import {useNavigate} from "react-router-dom";
//SIGN UP/ REGISTER
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registeredData, setRegisteredData] = useState({})

    useEffect(() => {
        console.log(registeredData);
    }, [registeredData])

    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        if (firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword) {
            setRegisteredData(data);
            console.log(registeredData);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/signin");
        } else {
            alert("Please entere all the data or please check the password and confirmed password")
        }


    }

    return (
        <>
            <div className="bg-gradient-to-b from-customBlue flex flex-col mx-auto w-5/12 rounded-2xl p-10 shadow-xl shadow-slate-600 justify-center text-white my-10">
                <div className="text-center font-light p-4  font-serif text-3xl">SIGN UP</div>
                <div className="w-auto font-serif font-lite">
                    <div className="flex justify-between p-4">
                        <div className="p-2 text-lg">First Name : </div>
                        <div>
                            <input type="text" placeholder="First Name" className="border border-black p-2 w-72 text-base text-black" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-between p-4">
                        <div className="p-2 text-lg">Last Name :</div>
                        <div>
                            <input type="text" placeholder="Last Name" className="border border-black p-2 w-72 text-base text-black" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
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
                    <div className="flex justify-between p-4 ">
                        <div className="p-2 text-lg text-gray-700">Confirm Password :</div>
                        <div>
                            <input type="password" placeholder="Password" className="border border-black p-2 w-72 text-base text-black" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
                


                <div className="text-center font-serif text-pretty text-xl p-4 bg-blue-500 w-fit mx-auto rounded-xl px-8 text-white hover:cursor-pointer hover:bg-blue-400" onClick={handleSubmit}>     Sign Up    
                </div>

            </div>

        </>
    )
}

export default Register;