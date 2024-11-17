import { useState } from "react";
import { Quiz } from "./Quiz";
import tech_que from "./technical_questions";

const FormData = () => {
  const URL_person ="https://prafuel-ai-career-assistant.hf.space/take-personality-test";
  
    const URL_TECH = "https://prafuel-ai-career-assistant.hf.space/take-technical-test";

  const [formData] = useState({
    year: "final",
    branch: "Computer Science", // Ensure all required fields are initialized
    domains: ["Machine Learning"]
  });

  const [personalityQuestions, setPersonalityQuestions] = useState(null);
  const [technicalQuestions, setTechnicalQuestions] = useState(null);

  const handleClick = () => {
    // fetchData();
    fetchDataTech(formData);
    // setPersonalityQuestions(tech_que)
  };

  const fetchDataTech = async (formData) =>
  {
    try{
      const response = await fetch(URL_TECH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();
      console.log(json);
      setTechnicalQuestions(json.questions);

    }catch (error) {
      console.error("Error:", error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch(URL_person);

      const json = await response.json();
      console.log(json);
      setPersonalityQuestions(json); // Assuming the API returns a `questions` array
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {technicalQuestions === null ? (
        <div
          className="font-bold bg-slate-400 w-fit hover:cursor-pointer"
          onClick={handleClick}
        >
          Generate Questions
        </div>
      ) : (
        <Quiz tech_que={technicalQuestions} />
      )}
    </div>
  );
};

export default FormData;
