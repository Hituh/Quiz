
import React, {useState} from 'react'
import {useLocation} from 'react-router-dom';
import Question from '../../Components/question/question';
import AddQuizButton from '../../Components/addQuizButton/addQuizButton';
import AddQuestion from '../../Components/addQuestion/addQuestion';


const QuizPage = () => {
    //const quizInfo = useLocation();
    var quizInfo = JSON.parse(localStorage.getItem('quizData'));
    var check = true
    const [isShown, setIsShown] = useState(false);
    const handleAdd = () => {
        setIsShown(current => !current);
    }

    if(quizInfo){
        return (
            <>
                
            <div className="main1">
                <div className="container">
                    <div className="row" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                        <div className="col" style={{ fontSize: "50px" }}>
                            {/* {quizInfo.state.myProps.data.Title} */}
                            {quizInfo.data.Title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col" style={{ maxWidth: "fit-content" }}>
                                {/* <img src={quizInfo.state.myProps.data.Picture} style={{ height: "300px" }} alt=""></img> */}
                                <img src={quizInfo.data.Picture} style={{ height: "300px" }} alt=""></img>
                            </div>
                            <div className="col">
                                <div className="row">
                                <ul className="ul">
                                    {quizInfo.data.Questions.map((data1, key) => (
                                        <li className="li" key={key}>
                                            <Question data={data1}  />
                                        </li>
                                    ))}
                                </ul>
                                </div>          
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div>
         {check === true &&
                <div>
                    <button style={{ minWidth: "100%", marginTop: "200px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd()}>Dodaj Pytanie</button>
                    {isShown &&
                        <div><AddQuestion data={quizInfo}></AddQuestion>
                        </div>
                    }
                </div>
            }
        </div>
                        {/* <AddQuizButton /> */}
                    {/* <AddQuizButton data={quizInfo.state.myProps.data}/> */}
                    </div> 
                </div>
            </div>
        </>
        )
    }
    
}
export default QuizPage