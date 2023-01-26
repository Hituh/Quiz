
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/HomePage/HomePage'
import Quiz from './Components/Quiz/Quiz'
import Score from './Pages/ScorePage/ScorePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/quizPageReact" element={<Quiz which={"React"} location="/quizPageReact"/>} />
          <Route path="/quizPageAngular" element={<Quiz which={"Angular"} location="/quizPageAngular"/>} />
          <Route path="/*" element={<h2>Bad route</h2>} />
          <Route path="/score/:score" element={<Score />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
