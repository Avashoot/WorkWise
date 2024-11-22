import { useState, useContext } from "react";
import { Quiz } from "./Quiz";
import { testSubmissionsPut } from "./Constants";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";


const FormData = (props) => {

  const { personalityQuestions, technicalQuestions } = props

  const { signInedUserData } = useContext(userContext);


  const [personalityQuestionsAnswers, setPersonalityQuestionsAnsers] = useState([]);
  const [technicalQuestionsAnswers, setTechnicalQuestionsAnswers] = useState([]);

  const [next, setNext] = useState(false);

  const [resetAns, setResetAns] = useState(false);

  const navigate = useNavigate();

  const putTestResponseData = async (testData) => {
    try {
      const response = await fetch(testSubmissionsPut + signInedUserData.email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save profile: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error in putTestResponse:", error);
      throw error;
    }
  };
  
  const handleSubmit = async () => {
    try {
      if (!Array.isArray(technicalQuestionsAnswers) || !Array.isArray(personalityQuestionsAnswers)) {
        throw new Error("Invalid input data: Both questions arrays must be defined and arrays.");
      }
  
      const filteredTQA = technicalQuestionsAnswers.filter(
        (tqa) => !personalityQuestionsAnswers.some(
          (pqa) =>
            pqa.id === tqa.id && // Compare by ID
            pqa.answeredOption === tqa.answeredOption // Ensure answers match
        )
      );

      const date = new Date();

      let day = String(date.getDate()).padStart(2, '0');
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let year = date.getFullYear();

      let currentDate = `${day}-${month}-${year}`;
      console.log(currentDate);
  
      const combinedData = {
        Date: currentDate,
        PQA: personalityQuestionsAnswers,
        TQA: filteredTQA,
      };
  
      await putTestResponseData(combinedData).then(()=>{
        navigate("/");
      })
      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };


  return (
    <div>
      <div>
        {(
          <div>
            {next === false ?

              <>
                <Quiz tech_que={personalityQuestions} questionsAnswers={personalityQuestionsAnswers} setQuestionsAnsers={(data) => setPersonalityQuestionsAnsers(data)} nextVal={next} resetAns={resetAns} setResetAns={() => setResetAns(false)} />
                <div className="bg-green-500 p-5 text-white px-10 text-2xl rounded-full my-10 font-serif hover:cursor-pointer hover:bg-green-700 w-fit mx-auto" onClick={() => setNext(true)
                }>Next →</div>
              </>
              :
              <>
                <Quiz tech_que={technicalQuestions} questionsAnswers={technicalQuestionsAnswers} setQuestionsAnsers={(data) => setTechnicalQuestionsAnswers(data)} nextVal={next} resetAns={resetAns} setResetAns={() => setResetAns(true)} />
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
