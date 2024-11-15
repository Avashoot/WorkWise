import {useState , lazy, Suspense} from "react";
import { useNavigate } from "react-router-dom";
import PersonalityQuestions from "./GeneratePersonalityQuestions";

// const PersonalityQuestions = lazy(import("./GeneratePersonalityQuestions"))

const FormData = () => {
  const URL = "https://prafuel-ai-based-career-consultant.hf.space/take-personality-test";
  
  const [formData] = useState({
    year: "final",
    branch: "Computer Science", // Ensure all required fields are initialized
  });

//   const nevigate = useNavigate();

  const [personalityQuestions, setPersonalityQuestions] = useState(null);
  console.log("Hello");

  const handleClick = ()=>{
    fetchData(formData);
    // nevigate("/body/personalityquestions")
  }

  const fetchData = async (data) => {
        
    try {
        const response = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
  
        const json = await response.json();
        setPersonalityQuestions(json);
        // console.log("Response:", json);

      } catch (error) {
        console.error("Error:", error);
      }

    };

    console.log(personalityQuestions);
  
  

  return (
    <>
    
    <div className="font-bold bg-slate-400 w-fit hover:cursor-pointer" onClick={
        handleClick
    }>Generate Questions</div>
    {/* {personalityQuestions && personalityQuestions.length > 0 ? (
        <PersonalityQuestions questions={personalityQuestions} />
      ) : (
        <div></div>
      )} */}

    </>
  );
};

export default FormData;
