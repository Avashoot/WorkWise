import { useCallback, useContext } from "react";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";


const Profile = () => {

    const {signInedUserData } = useContext(userContext);
    const navigate = useNavigate();


    const { firstName, lastName, email, collegeName, admissionYear, graduationYear, branch, domains, imageUrl } = signInedUserData

    const handleClick = ()=>{
        navigate("/updateprofile");
    }

    return (
        <>
            <div className="flex justify-between w-10/12 mx-auto my-16 bg-orange-50 p-10">
                <div className="profile Image w-96 bg-green-200">
                    <img src={imageUrl} className="w-64 h-64 rounded-full bg-platinum p-2" alt="profilePick"></img>

                </div>
                <div className="w-6/12">
                    <div className="text-xl font-serif font-light flex justify-between"> First Name :
                        <div className="w-80 ">
                            {firstName}
                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> Last Name :
                        <div className="w-80 ">
                            {lastName}
                        </div>
                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> Email Id :
                        <div className="w-80 ">
                            {email}

                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> College Name :
                        <div className="w-80 ">
                            {collegeName}

                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> Admission Year :
                        <div className="w-80 ">
                            {admissionYear}

                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> Graduation Year :
                        <div className="w-80 ">
                            {graduationYear}

                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between"> Branch :
                        <div className="w-80 ">
                            {branch}

                        </div>

                    </div>
                    <div className="text-xl font-serif font-light flex justify-between flex-wrap"> Interested Domain :
                        <div className="w-80 ">
                            {domains.join(", ")}

                        </div>

                    </div>

                    <div onClick={handleClick} className="hover:cursor-pointer">Update profile</div>

                </div>
            </div>



        </>
    )
}
export default Profile