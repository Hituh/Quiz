import React, { useState, Component} from "react";
import { useLocation } from "react-router-dom";
import Question from "../question/question";
import AddQuestion from "../addQuestion/addQuestion";
import styles from "../quizPage/quizPage.module.css";

class QuizPage extends Component {
    //const quizInfo = useLocation();
    constructor (props) {
        super(props)
        this.state = {
            props: [...this.props.props]
        }
    }

    handleAdd = () => {
        this.setState({ isShown: !this.state.isShown });
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
