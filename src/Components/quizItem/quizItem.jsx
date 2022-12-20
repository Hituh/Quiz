import React from "react"
import "./quizItem.css"
import { useNavigate } from 'react-router-dom'

const QuizItem = (props) => {

  let navigate = useNavigate();
  const handleStart = (props) => {
    localStorage.setItem('quizData', JSON.stringify(props));
    console.log(props)
    navigate("/quiz");
  }

  return (
    <div className="card">
      <div className="image">
        <img src={props.data.Picture} alt="" />
      </div>
      <div className="title" style={{ minHeight: "10vh", maxWidth: "20rem" }}>
        <h3 style={{ paddingLeft: "10px" , fontSize:"40px"}}>{props.data.Title}</h3>
      </div>
      <div className="info">
        <div className="columnleft">
          <p>Id quizu: {props.data.Id}</p>
        </div>
        <div className="columnright">
          <div className="Length" style={{fontSize:"20px"}}>
            <h6>
              Długość quizu: {props.data.Questions.length} <span></span>
              {props.data.Questions.length<5 ? (
                        <span className="text-success">pytania</span>
                    ) : (
                        <span className="text-success">pytań</span>
                    )}
            </h6>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="btn" onClick={() => handleStart(props)}>Rozpocznij Quiz</button>
      </div>
    </div>
  );
};
export default QuizItem