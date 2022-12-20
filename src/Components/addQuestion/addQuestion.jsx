import React, {useState} from 'react'
import './addQuestion.css'
import { useNavigate } from 'react-router-dom'

function AddQuestion(props){
    const [Question, setQuestion] = useState("");
    const [Answer1, setAnswer1] = useState("");
    const [Answer2, setAnswer2] = useState("");
    const [Answer3, setAnswer3] = useState("");
    const [Answer4, setAnswer4] = useState("");
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        var quizInfo = JSON.parse(localStorage.getItem('quizData'));
        console.log(quizInfo)
        //window.localStorage.removeItem('quizData')
        var newQuestions=quizInfo.data.Questions
        newQuestions.push({Question:Question, Options:[Answer1, Answer2, Answer3, Answer4]})
        var newProps = {Id: quizInfo.data.Id, Title: quizInfo.data.Title, Questions:newQuestions, Picture:quizInfo.data.Picture}
        localStorage.setItem('quizData', JSON.stringify(newProps));
    }
    return(
        <div className="cont">
            <div className="container">
                <h2>Nowy Film</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label for="title" className="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Pytanie</label>
                        <input type="text" className="form-control" name="Question" onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Odpowiedź nr1</label>
                        <input type="RRRR-MM-DD" className="form-control" name="Answer1" onChange={(e) => setAnswer1(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Odpowiedź nr2</label>
                        <input type="text" className="form-control" name="Answer2" onChange={(e) => setAnswer2(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Odpowiedź nr3</label>
                        <input type="text" className="form-control" name="Answer3" onChange={(e) => setAnswer3(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="title" className="form-label" style={{ fontSize: "22px", fontWeight: "bold", color: "#3b43de" }}>Odpowiedź nr4</label>
                        <input type="text" className="form-control" name="Answer4" onChange={(e) => setAnswer4(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}>Dodaj Pytanie</button>
                    </div>
                </form>
            </div>
        </div> 
    )
}
export default AddQuestion