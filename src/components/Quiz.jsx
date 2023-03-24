import React, {useState} from 'react'
import { useQuiz } from '../context/QuizContext';
import { quizArray,AnswerArray, totalScore } from '../quizQuestion';
import PredictQuestion from "./PredictQuestion";

export default function Quiz() {
  const {totalScore, setTotalScore} =  useState(totalScore);
  const [questionNo , setQuestionNo] =  useState(0);
  const [questionData , setQuestionData] =  useState(quizArray[questionNo]);
    const  loadNextQuestion = (questionNo) => {
      setQuestionNo(questionNo+1)
      setQuestionData(quizArray[questionNo+1]);
    }
    const loadPreviousQuestion = (questionNo) => {
      setQuestionNo(questionNo-1)
      setQuestionData(quizArray[questionNo-1]);
    }
 
  return (
    <div>
        <PredictQuestion  questionNo={questionNo} questionData={questionData} AnswerArray={AnswerArray}/>
        {questionNo !==0 ?  <button className=" float-left btn btn-success btn-sm left-btn" type="submit" onClick={() => { loadPreviousQuestion(questionNo) }} >Previous</button>: ''}
        {quizArray[questionNo+1] ?
        <button className="btn btn-success btn-sm float-right right-btn" type="submit" onClick={() => { loadNextQuestion(questionNo) }} >CONTINUE</button>
        :
        <a href="/score" className='text-white'><button className="btn btn-success btn-sm float-right right-btn" type="submit"  >FINISH</button></a>
        }
     
    </div>
  )
}
