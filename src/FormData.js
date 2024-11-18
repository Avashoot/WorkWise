import { useState } from "react";
import { Quiz } from "./Quiz";


const FormData = (props) => {

  const {personalityQuestions, technicalQuestions} = props


  const [personalityQuestionsAnswers, setPersonalityQuestionsAnsers] = useState([]);
  const [technicalQuestionsAnswers, setTechnicalQuestionsAnswers] = useState([]);

  const [next, setNext] = useState(false);

  const [resetAns, setResetAns] = useState(false);
  

  const handleSubmit =()=>{
    

    const filteredTQA = technicalQuestionsAnswers.filter(
      (tqa) => !personalityQuestionsAnswers.some(
        (pqa) =>
          pqa.id === tqa.id && // Compare by ID
          pqa.answeredOption === tqa.answeredOption // Ensure answers match
      )
    );

    const combinedData = {
      PQA: personalityQuestionsAnswers,
      TQA: filteredTQA,
    };
  
    console.log(combinedData);

  }

  
  return (
    <div>
      <div>
        {(
          <div>
            {next === false ? 
              
              <>
                <Quiz tech_que={personalityQuestions} questionsAnswers={personalityQuestionsAnswers} setQuestionsAnsers={(data)=>setPersonalityQuestionsAnsers(data)} nextVal={next} resetAns={resetAns} setResetAns = {()=>setResetAns(false)}/>
                <div className="bg-green-500 p-5 text-white px-10 text-2xl rounded-full my-10 font-serif hover:cursor-pointer hover:bg-green-700 w-fit mx-auto" onClick={()=>setNext(true)
                }>Next →</div>
              </>  
              :
              <>
                <Quiz tech_que={technicalQuestions} questionsAnswers={technicalQuestionsAnswers} setQuestionsAnsers={(data)=>setTechnicalQuestionsAnswers(data)} nextVal={next} resetAns={resetAns} setResetAns = {()=>setResetAns(true)}/>
                <div className="bg-green-500 p-5 text-white px-10 text-2xl rounded-full my-10 font-serif hover:cursor-pointer hover:bg-green-700 w-fit mx-auto" onClick={handleSubmit}>Submit</div>
              </> 
            }
            
          </div>
          
        )}

      
      </div>
      
    </div>

  );
};

export default FormData;
