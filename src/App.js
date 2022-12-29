
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Home from './Pages/homePage/homePage'
import QuizPage from './Components/quizPage/quizPage'
import Score from './Pages/scorePage/scorePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="quizPage" element={<QuizPage />} />
          <Route path="/*" element={<h2>Bad route</h2>} />
          <Route path="/score/:score" element={<Score />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
