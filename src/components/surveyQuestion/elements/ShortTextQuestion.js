import { useState } from "react";

function ShortTextQuestion({question, setQuestions, isViewResult}) {
    const [inputValue, setInputValue] = useState(question.answer);

    const onAnswer = (value)=> {
        setInputValue(value)
        setQuestions(prevValue => {
          const current_question = prevValue.findIndex(item => item.id === question.id);
  
          const copyArray = {...question};
  
          copyArray.answer = value;
  
          const updatedArray = prevValue.toSpliced(current_question, 1, copyArray)
  
          console.log(updatedArray)
  
          return updatedArray;
        })
    }
    return (
        <div className={isViewResult ? "pointer-events-none": ""} >
            <h2 className='text-3xl font-bold text-center pt-8 pb-10'>{question?.question}</h2>
            <div className="relative px-12 w-full flex justify-center items-center">
                    <input type="text" placeholder="Type Your Answer" className="border pl-4 p-2 focus:border-blue-400 rounded-xl mt-1 w-full input-success" value={inputValue} onChange={(e)=> onAnswer(e.target.value)} />
            </div>

        </div>
    )
}

export default ShortTextQuestion