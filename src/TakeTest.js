import { Link, useNavigate } from "react-router-dom";
import { Quiz } from "./Quiz";
import tech_que from "./technical_questions";


const TakeTest = () => {
  const questions = tech_que;
  const nevigate = useNavigate();
  // const [answers, setAnswers] = useState([]);

  // const [chose, setChose] = useState(false);

  // const addAnswer = (id, question, options, answeredOption)=>{
  //     const newAnswer = {
  //         questionId : id,
  //         question : question,
  //         options : options,
  //         selectedOption : answeredOption
  //     }

  //     setAnswers((preAnswer)=>{
  //         preAnswer.map((ans)=>{
  //             if(ans.questionId===id){

  //             }
  //         })
  //     })
  // }

  console.log(questions);
  return (
    <div className="">
      {/* Questions */}
      <div
        onClick={() => {
          nevigate("/personality");
        }}
        className="hover:cursor-pointer"
      >
        Take Personality Test
      </div>
      <div
        onClick={() => {
          nevigate("/interest");
        }}
        className="hover:cursor-pointer"
      >
        Take Interest Test
      </div>
      <div
        onClick={() => {
          nevigate("/technical");
        }}
        className="hover:cursor-pointer"
      >
        Take Technical test
      </div>
    </div>
  );
};
export default TakeTest;
