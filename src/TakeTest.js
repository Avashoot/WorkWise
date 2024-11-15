import { useState } from "react";
import tech_que from "./technical_questions";

const TakeTest = () =>{
    const questions = tech_que;
    const [answers, setAnswers] = useState([]);

    const [chose, setChose] = useState(false);

    const addAnswer = (id, question, options, answeredOption)=>{
        const newAnswer = {
            questionId : id,
            question : question,
            options : options,
            selectedOption : answeredOption
        }

        setAnswers((preAnswer)=>{
            preAnswer.map((ans)=>{
                if(ans.questionId===id){
                    
                }
            })
        })
    }

    const handleClick = ()=>{

    }
    console.log(questions); 
    return (
        <div className="bg-slate-700 text-white">
            {/* Questions */}
            <div>
                {questions.map((que)=>{
                    return (
                        <div key={que.id}>
                            {(que.id)+". " +que.question}
                            {que.options.map((option, optionId)=>{
                                return(
                                    <div key={optionId} className="hover:cursor-pointer" onClick={()=>{
                                        if(chose=== true){
                                            setChose(false)
                                        }else{
                                            setChose(true)
                                        }
                                        
                                    }}>{chose? "🟢" + option :"⃝" + option}</div>
                                )
                            })}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TakeTest;