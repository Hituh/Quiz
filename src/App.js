
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Home from './Pages/homePage/homePage'
import QuizPage from './Components/quizPage/quizPage'

function App() {
 

    var states = [
      {Id: 1, Question: "Jaka jest poprawna komenda do utworzenia nowego projektu React?", Answers: ["npm create-react-app", "npm create-react-app myProjectInReact", "npx create-react-app", "npx create-react-app myProjectInReact"], CorrectAnswer: 4},
      {Id: 2, Question: "Jaki jest domyślny lokalny port hosta używany przez serwer deweloperski React?", Answers: ["3500", "5000", "8080", "3000"], CorrectAnswer: 4},
      {Id: 3, Question: "_________ pomaga Reactowi zachować jednokierunkowość danych.", Answers: ["JSX", "Props", "Flux", "DOM"], CorrectAnswer: 3},
      {Id: 4, Question: "Jak nazywa się programista React.js", Answers: ["Jordan Walke", "Mark Zuckerberg", "Tim Lee", "Mark Walke"], CorrectAnswer: 1}
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
