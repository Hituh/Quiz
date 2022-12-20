
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Home from './Pages/homePage/homePage'
import QuizPage from './Components/quizPage/quizPage'

function App() {
 

    var states = [
      {Id: 1, Question: "Pytanie nr 1?", Answers: ["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"], CorrectAnswer: 1},
      {Id: 2, Question: "Pytanie nr 2?", Answers: ["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"], CorrectAnswer: 2},
      {Id: 3, Question: "Pytanie nr 3?", Answers: ["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"], CorrectAnswer: 3},
      {Id: 4, Question: "Pytanie nr 4?", Answers: ["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"], CorrectAnswer: 4}
    ]
    localStorage.setItem('quizData', JSON.stringify(states));
  
  

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="quizPage" element={<QuizPage props={states} />} />
          <Route path="/*" element={<h2>Bad route</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
