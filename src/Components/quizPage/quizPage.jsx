import React, { useState, Component} from "react";
import Question from "../question/question";
import AddQuestion from "../addQuestion/addQuestion";
import styles from "../quizPage/quizPage.module.css";
import {getQuiz} from '../api/QuizApi.js'

class QuizPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            props:[],
        }
    }

    componentDidMount(){
        const {props} = this.state;
        if(props.length === 0){
            getQuiz()
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


    updateQuestions = (question) => {
        // this.updateQuiz("PUSH", question);
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
        console.log(this.state)
        return (
            <div className="main1">
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
                            />
                        </div>
                    ))}
                </div>
                <div className="row">
                
                        <div>
                            <button
                                className={styles.Button2}
                                onClick={this.handleAdd}>
                                Dodaj Pytanie
                            </button>
                            
                                <div>
                                    <AddQuestion data={this.props} updateQuestions={this.updateQuestions}/>
                                </div>
                            
                        </div>
                    
                    {/* <AddQuizButton /> */}
                    {/* <AddQuizButton data={quizInfo.state.myProps.data}/> */}
                </div>
            </div>
        );
    }
}
export default QuizPage;
