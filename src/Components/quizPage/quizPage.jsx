import React, {Component} from "react";
import Question from "../question/question";
import AddQuestion from "../addQuestion/addQuestion";
import styles from "../quizPage/quizPage.module.css";
import {getQuiz} from '../api/QuizApi.js'
import {getQuizA} from '../api/QuizApi.js'
import { Link } from "react-router-dom"

class QuizPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            props:[],
            isShown: false,
            myScore: 0,
            which: props.which
        }
        // console.log("To jest w konstr: "+props);
        // console.log(props.which);
    }

    componentDidMount(){
        const {props} = this.state;
        if(props.length === 0 && this.state.which === "React"){
            getQuiz()
            .then(props1 =>{
                this.setState({
                    props: props1,
                })
            })
        } 
        else if(props.length === 0 && this.state.which === "Angular"){
            getQuizA()
            .then(props1 =>{
                this.setState({
                    props: props1,
                })
            })
        } 
    }
    handleAdd = () => {
        this.setState({ isShown: !this.state.isShown });
      };

      handleScore = (points) => {
        var prevScore = this.state.myScore;
        var actualScore = prevScore + points;
        this.setState({myScore: actualScore  });
        console.log(actualScore)
      };


    updateQuestions = (question) => {
        var done = false;
        if(!done)
        this.setState((prevState) => {
            done=true
            console.log('added')
            let students=prevState.props;
            students.push(question);
        return {props: students};
          });
    }

    updateQuiz =(action, body) =>{
        switch(action){
            case "PUSH":
                this.setState(state => {
                    var list = state.props;
                    list.push(body);
                    return {props:list};
                });
                break;
                default:
                    break;
            case "PUT":
                this.setState(state =>{
                    var list =state.props;
                    var qId = list.findIndex(q => q.Id === body.Id);
                    list[qId].Question = body.Question;
                    list[qId].Answers[0] = body.Answers[0];
                    list[qId].Answers[1] = body.Answers[1];
                    list[qId].Answers[2] = body.Answers[2];
                    list[qId].Answers[3] = body.Answers[3];

                    return {props: list}
                })
                break;
                case "DELETE":
                this.setState(state =>{
                    var list =state.props;
                    var qId = list.findIndex(q => q.Id === body.Id);
                    list.splice(qId);
                    return {props: list}
                })
                break;
        }
        
    }
    render (){
        return (
            <div className="main1">
                <div>
                    <h1>Aktualny wynik: {this.state.myScore}</h1>
                </div>
                <div className={styles.card_list}>
                    {this.state.props.map((data) => (
                        <div key={data.Id}>
                            <Question
                                Id={data.Id}
                                Question={data.Question}
                                Answers={data.Answers}
                                CorrectAnswer={
                                    data.CorrectAnswer
                                }
                                data={this.updateQuiz}
                                score={this.handleScore}
                                which={this.state.which}
                            />
                        </div>
                    ))}
                </div>
                <Link to={`/score/${this.state.myScore}`}style={{ textDecoration: "none" }}>Zakończ Quiz</Link>
                <div className="row">
                
                        <div>
                            <button
                                className={styles.Button2}
                                onClick={this.handleAdd}>
                                Dodaj Pytanie
                            </button>
                            {this.state.isShown ? (
                                <div>
                                    <AddQuestion data={this.state.props} updateQuestions={this.updateQuestions} which={this.state.which}/>
                                </div>
                    
                            ) : (
                                <></>
                                )}
                        </div>
                
                </div>
            </div>
        );
    }
}
export default QuizPage;
