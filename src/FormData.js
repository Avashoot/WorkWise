import { useEffect, useState } from "react";
import { Quiz } from "./Quiz";
import { first_URL, last_URL } from "./Constants";

const FormData = () => {
  const URL_PERSON = first_URL + "personality" + last_URL;

  const URL_TECH = first_URL + "technical" + last_URL;

  const [formData] = useState({
    year: "final",
    branch: "Computer Science", // Ensure all required fields are initialized
    domains: ["Machine Learning"]
  });

  const [personalityQuestions, setPersonalityQuestions] = useState([]);
  const [technicalQuestions, setTechnicalQuestions] = useState([]);

  const [personalityQuestionsAnswers, setPersonalityQuestionsAnsers] = useState([]);
  const [technicalQuestionsAnswers, setTechnicalQuestionsAnswers] = useState([]);

  const [next, setNext] = useState(false);

  useEffect(()=>{
    console.log(technicalQuestions);
  },[technicalQuestions]);
  const handleClick = () => {
    // fetchData();
    fetchDataPersonality();
    fetchDataTech(formData);
    // setPersonalityQuestions(tech_que)
  };

  const fetchDataTech = async (formData) => {
    try {

      const response_technical = await fetch(URL_TECH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const jsonTechnical = await response_technical.json();

      setTechnicalQuestions(jsonTechnical.questions);
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
    <div>
      <div>
        {personalityQuestions.length===0 ? (
          <div
            className="font-bold bg-slate-400 w-fit hover:cursor-pointer"
            onClick={handleClick}
          >
            Generate Questions
          </div>
        ) : (
          <div>
            {next === false ? 
              
              <>
                <Quiz tech_que={personalityQuestions} questionsAnswers={personalityQuestionsAnswers} setQuestionsAnsers={setPersonalityQuestionsAnsers} />
                <div className="bg-green-500 p-5 text-white px-10 text-2xl rounded-full my-10 font-serif hover:cursor-pointer hover:bg-green-700 w-fit mx-auto" onClick={()=>setNext(true)
                }>Next →</div>
              </>  
              :
              <>
                <Quiz tech_que={technicalQuestions} questionsAnswers={technicalQuestionsAnswers} setQuestionsAnsers={setTechnicalQuestionsAnswers} />
                <div className="bg-green-500 p-5 text-white px-10 text-2xl rounded-full my-10 font-serif hover:cursor-pointer hover:bg-green-700 w-fit mx-auto" >Submit</div>
              </> 
            }
            
          </div>
          
        )}

      
      </div>
      
    </div>

  );
};

export default FormData;
