
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Home from './Pages/homePage/homePage'
import QuizListPage from './Pages/quizListPage/quizListPage'
import QuizPage from './Pages/quizPage/quizPage'

function App() {  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="quizList" element={<QuizListPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
          <Route path="/*" element={<h2>Bad route</h2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
