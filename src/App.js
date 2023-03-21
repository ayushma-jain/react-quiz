import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { quizArray } from "./quizQuestion";
import PredictQuestion from "./components/PredictQuestion";
import { useState } from "react";
function App() {
  const [questionNo , setQuestionNo] =  useState(0);
  const [questionData , setQuestionData] =  useState(quizArray[0]);
  const  rerenderParentCallback = (questionNo) => {
    setQuestionNo(questionNo+1)
   
    setQuestionData(quizArray[questionNo+1]);

    console.log(questionNo);
  }
  return (
    <div className="App" >
      <div className="container mt-3">
        <PredictQuestion  questionNo={questionNo} questionData={questionData} />
        <button className="w-100 btn btn-success btn-sm" type="submit" onClick={() => { rerenderParentCallback(questionNo) }} >Continue</button>
      </div>
    </div>
  );
}

export default App;
