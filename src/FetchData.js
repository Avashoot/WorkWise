import { useState } from "react";
import { first_URL, last_URL } from "./Constants";
import FormData from "./FormData";
import AddFormData from "./AddFormData";


const FetchData = () => {
    const URL_PERSON = first_URL + "personality" + last_URL;

    const URL_TECH = first_URL + "technical" + last_URL;


    const [formData, setFormData] = useState({
        year: "final",
        branch: "Computer Science", // Ensure all required fields are initialized
        domains: ["Machine Learning"]
    });


    const [personalityQuestions, setPersonalityQuestions] = useState([]);
    const [technicalQuestions, setTechnicalQuestions] = useState([]);

    const handleClick = () => {
        // fetchData();
        fetchDataPersonality();
        fetchDataTech(formData);
        // setPersonalityQuestions(tech_que)
    };

    const fetchDataTech = async (formData) => {
        try {

            // const response_technical = await fetch(URL_TECH, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData)
            // });
            const responce_Default = await fetch(URL_PERSON)

            const jsonTechnical = await responce_Default.json();

            setTechnicalQuestions(jsonTechnical);
            console.log(technicalQuestions)


        } catch (error) {
            console.error("Error:", error);
        }
    }

    const fetchDataPersonality = async () => {
        try {
            const responce_personality = await fetch(URL_PERSON)

            const jsonPersonality = await responce_personality.json();

            setPersonalityQuestions(jsonPersonality);

        } catch (error) {
            console.log("Error : ", error);
        }
    }


    return (
        <>
            <div>
                {personalityQuestions.length === 0 ?
                    <>
                        <AddFormData setFormData={(data)=>setFormData(data)} formData={formData}/>
                        <div
                            className="font-bold bg-slate-400 w-fit hover:cursor-pointer mx-10 my-5 p-5 rounded-xl text-white hover:bg-slate-600"
                            onClick={handleClick}
                        >
                            Generate Questions
                        </div>
                    </> :
                    <FormData personalityQuestions={personalityQuestions} technicalQuestions={technicalQuestions} />

                }
            </div>

        </>
    )
}


export default FetchData;