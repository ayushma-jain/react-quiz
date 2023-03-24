import react from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { useState } from "react";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { QuizProvider } from "./context/QuizContext";
function App() {

  return (
    <div className="App" >
      <div className="container mt-3 mb-5">
        <QuizProvider>
          <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Quiz/>} />
                <Route exact path="/score" element={<Score/>} />
            </Routes>
          </BrowserRouter>
        </QuizProvider>
      </div>
    </div>
  );
}

export default App;
