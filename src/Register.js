import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllCredentials, creadentialsPut, profilePut } from "./Constants";
//SIGN UP/ REGISTER
const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [allCredentials, setAllCredentials] = useState([])
    // const [registeredData, setRegisteredData] = useState({})

    useEffect(() => {
        console.log(allCredentials);
    }, [allCredentials])

    const navigate = useNavigate();

    const putCredentials = async (data, email) => {
        try {

            const response = await fetch(creadentialsPut + email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to save credentials: ${response.statusText}`);
            }

        } catch (error) {
            console.error("Error in putCredentials:", error);
            throw error;
        }
    }

    const putProfile = async (data, email) => {
        try {
            const response = await fetch(profilePut + email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to save profile: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Error in putProfile:", error);
            throw error; // Re-throw to handle higher up.
        }
    }

    const getCredentials = async () => {
        try {
            const responce = await fetch(AllCredentials);
            const jsonData = await responce.json();
            setAllCredentials(jsonData);

        } catch (error) {
            console.log(error)
        }
    }



    const handleSubmit = () => {
        const credentialsData = {
            email: email,
            password: password
        };
    
        const profileData = {
            firstName: firstName,
            lastName: lastName,
            domains : []
        };
    
        getCredentials()
            .then(() => {
                // Use the state directly after it has been set
                const containsUser = allCredentials.some((data) => data.email === credentialsData.email);
    
                if (
                    firstName.trim() !== "" &&
                    lastName.trim() !== "" &&
                    email.trim() !== "" &&
                    password !== "" &&
                    confirmPassword !== "" &&
                    password === confirmPassword &&
                    !containsUser
                ) {
                    // Chain API calls to ensure correct execution order
                    putCredentials(credentialsData, credentialsData.email)
                        .then(() => putProfile(profileData, credentialsData.email))
                        .then(() => {
                            // Clear the form only after the API calls succeed
                            setFirstName("");
                            setLastName("");
                            setEmail("");
                            setPassword("");
                            setConfirmPassword("");
                            navigate("/signin");
                        })
                        .catch((error) => {
                            console.error("Error during registration:", error);
                            alert("An error occurred during registration. Please try again.");
                        });
                } else {
                    if (containsUser) {
                        alert("User already registered. Please login.");
                    } else {
                        alert("Please enter all the data or check the password confirmation.");
                    }
                }
            })
            .catch((error) => {
                console.error("Error fetching credentials:", error);
                alert("Failed to fetch credentials. Please try again later.");
            });
    };
    

    useEffect(() => {
        if (
            firstName.trim() &&
            lastName.trim() &&
            email.trim() &&
            password &&
            confirmPassword &&
            password === confirmPassword
        ) {
            setIsDisabled(false); // Enable the button
        } else {
            setIsDisabled(true); // Disable the button
        }
    }, [firstName, lastName, email, password, confirmPassword]);

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



                <button
                    className={`text-center font-serif text-xl p-4 w-fit mx-auto rounded-xl px-8 text-white hover:cursor-pointer ${isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400 "
                        }`}
                    onClick={isDisabled ? null : handleSubmit} // Prevent action when disabled
                    disabled={isDisabled} // Native button attribute
                >
                    Sign Up
                </button>

            </div>

        </>
    )
}

export default Register;