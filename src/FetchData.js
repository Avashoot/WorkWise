import { useState, useContext } from "react";
import FormData from "./FormData";
import { getPersonalityTestQuestions, getTechnicalTestQuestions } from "./Constants";
import userContext from "./userContext";


const FetchData = () => {
    const URL_PERSON = getPersonalityTestQuestions;

    const URL_TECH = getTechnicalTestQuestions;

    const {signInedUserData}  = useContext(userContext)


    const [personalityQuestions, setPersonalityQuestions] = useState([]);
    const [technicalQuestions, setTechnicalQuestions] = useState([]);

    const handleClick = () => {
        // fetchData();
        fetchDataPersonality(signInedUserData.email);
        fetchDataTech(signInedUserData.email);
        // setPersonalityQuestions(tech_que)
    };

    const fetchDataTech = async (email) => {
        try {

            const response_technical = await fetch(URL_TECH+ email)


            const jsonTechnical = await response_technical.json();

            setTechnicalQuestions(jsonTechnical.questions);
            console.log(technicalQuestions)


        } catch (error) {
            console.error("Error:", error);
        }
    }

    const fetchDataPersonality = async (email) => {
        try {
            const responce_personality = await fetch(URL_PERSON + email)

            const jsonPersonality = await responce_personality.json();

            setPersonalityQuestions(jsonPersonality.questions);

        } catch (error) {
            console.log("Error : ", error);
        }
    }


    return (
        <>
            <div>
                {personalityQuestions.length === 0 ?
                    <>
                        <div
                            className="font-bold bg-slate-400 w-fit hover:cursor-pointer mx-10 my-5 p-5 rounded-xl text-white hover:bg-slate-600"
                            onClick={handleClick}
                        >
                            Start Test
                        </div>
                    </> :
                    <FormData personalityQuestions={personalityQuestions} technicalQuestions={technicalQuestions} />

                }
            </div>

        </>
    )
}


export default FetchData;