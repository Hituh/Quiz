import React, { Component } from 'react'
import styles from './question.module.css'
import EditQuestion from "../editQuestion/editQuestion";
import { deleteQuestion } from '../api/QuizApi.js'
import { deleteQuestionA } from '../api/QuizApi.js'
import PropTypes from "prop-types";

//test do sprawdzenia poprawnosci commita

class Question extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            isShown: false,
            points: 0,
            which: props.which,
            cliked: false
        };
    }
    handleAnswer = (userAnswer) => {
        if (this.state.cliked === false) {
            if (userAnswer === this.props.CorrectAnswer) {
                this.setState(() => {
                    return { answer: "Poprawna odpowiedź!" };
                })
                this.setState({ points: 1 });
                this.props.score(1)
                this.setState({ cliked: true })
            }
            else {
                this.setState(() => {
                    return { answer: "Niestety źle :(" };
                })
                this.setState({ points: 0 });
                this.props.score(0)
                this.setState({ cliked: true })
            }
        }
        else {
            console.log("Odp juz została wybrana!")
        }
    }
    handleDelete = () => {
        this.props.data("DELETE", this.props.Id);
        if (this.state.which === "React") { deleteQuestion(this.props.Id) }
        else if (this.state.which === "Angular") { deleteQuestionA(this.props.Id) }
    }

    handleEdit = () => {
        this.setState({ isShown: !this.state.isShown });
    };

    render() {
        return (
            <>
                <div className={styles.card}>
                    <h2 style={{ marginLeft: "2%", color: "white" }}>{this.props.Question}</h2>
                    <div>
                        <div className={styles.questions} style={{ width: "20%", float: "left" }} >
                            <p className={styles.questions}>• {this.props.Answers[0]}</p>
                            <p className={styles.questions}>• {this.props.Answers[1]}</p>
                            <p className={styles.questions}>• {this.props.Answers[2]}</p>
                            <p className={styles.questions}>• {this.props.Answers[3]}</p>
                        </div>
                        <div style={{ width: "80%", float: "right" }} >
                            <button className={styles.Button2} onClick={() => this.handleAnswer(1)}>Zaznacz</button>
                            <button className={styles.Button2} onClick={() => this.handleAnswer(2)}>Zaznacz</button>
                            <button className={styles.Button2} onClick={() => this.handleAnswer(3)}>Zaznacz</button>
                            <button className={styles.Button2} onClick={() => this.handleAnswer(4)}>Zaznacz</button>
                        </div>
                    </div>
                    <p style={{ marginLeft: "70%", fontSize: "10px" }}>Id pytania: {this.props.Id}
                        <button className={styles.editButtons} style={{ marginLeft: "40%" }} onClick={this.handleEdit}>Edytuj</button>
                        <button className={styles.editButtonsX} onClick={this.handleDelete}>X</button>
                    </p>
                    <p style={{ marginLeft: "40%", color: "#3b43de", fontSize: "2.5vh", fontWeight: "700" }}> {this.state.answer} </p>
                </div>
                {this.state.isShown ? (
                    <div>
                        <EditQuestion data={this.props} update={this.props.data} which={this.state.which} />
                    </div>
                ) : (
                    <></>
                )}
            </>
        )
    }
}
export default Question

Question.propTypes = {
    Answers: function (props, Answers, Question) {
        if (props[Answers].length !== 4) {
            return new Error(Answers + " passed to " + Question + " -> not enough answers")
        }
    },
    Id: function (props, Id, Question) {
        if (props.Id < 0) {
            return new Error(Id + " passed to " + Question + " was not postive number.")
        }
    },
    CorrectAnswer: function (props, CorrectAnswer, Question) {
        if (props.CorrectAnswer < 0 || props.CorrectAnswer > 4) {
            return new Error(CorrectAnswer + " passed to " + Question + " was not a number from <1,4>. It is actually:" + props.CorrectAnswer)
        }
    },
    Question: function (props, Question, component) {
        if (props.Question.length < 3) {
            return new Error(Question + " was too short")
        }
    },
    data: PropTypes.func.isRequired,
    score: PropTypes.func.isRequired
} 