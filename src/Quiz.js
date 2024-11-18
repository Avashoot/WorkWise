import { useState, useEffect } from "react";



export const Quiz = (props) => {
  const [answers, setAnswers] = useState([]);
  const {tech_que, questionsAnswers, setQuestionsAnsers, nextVal, resetAns, setResetAns} = props;

  
  
  useEffect(() => {
    setAnswers([]);
    console.log(questionsAnswers)
  }, [nextVal]);

  

  const handleClick = (questionId, question, options, selectedOption) => {
    const ans = {
      id: questionId,
      question: question,
      options: options,
      answeredOption: selectedOption,
    };
    let Updated = false;

    const updatedAnswersData = answers.map((opt) => {
      if (opt.id === questionId) {
        Updated = true;
        return { ...opt, answeredOption: selectedOption };
      }
      return opt;
    });

    if (!Updated) {
      updatedAnswersData.push(ans);
    }

    setAnswers(updatedAnswersData);
    setQuestionsAnsers(updatedAnswersData);
  

  };

//   console.log(answers[0]);
  const getSelectedOption = (questionId) => {
    const answer = answers.find((ans) => ans.id === questionId);
    return answer?.answeredOption || null;
  };
  return (
    tech_que.length ?
    <div className=" flex justify-center flex-col w-8/12 mx-auto ">
      <div className="p-4">
        {tech_que.map((que, index) => {
          const selectedOption = getSelectedOption(que.id);
          return (
            <div key={que.id} className="font-serif">
              <div className="p-2 m-2 bg-slate-500 text-white">
                {index + 1 + ". " + que.question}
              </div>
              <div className="mx-5 hover:cursor-pointer">
                {que.options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className={`border border-black m-2 p-2 rounded-full pl-5 
                        ${
                          selectedOption === option
                            ? "bg-blue-300 border-blue-700" // Selected option styles
                            : "hover:border-blue-700 hover:bg-blue-300" // Default hover styles
                        }`}
                      onClick={() =>
                        handleClick(que.id, que.question, que.options, option)
                      }
                      
                    >
                      {option}
                    </div>
                    
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    : <></>
  );
};
