import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [quiz, setQuiz] = useState([]);
  /*useEffect(() => {

    fetch("http://localhost:3000/QuizQuestions").then((response) => response.json()
    
    ).then((data) =>{
        console.log(data);
       setQuiz(data);
     })
   .catch((error) => {
        console.log(error);
    });
  }, []);*/
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:3000/QuizQuestions`
      );
      console.log(data);
      setQuiz(data);
    }
    fetchData();
  }, []);
  return (
    <QuizContext.Provider value={{ quiz }}>
      {children}
    </QuizContext.Provider>
  );
}



export function useQuiz() {
    console.log("Use Quiz is called");
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
