import React, { Component } from "react";
import Question from "../Question/Question";
import AddQuestion from "../AddQuestion/AddQuestion";
import styles from "../Quiz/Quiz.module.css";
import { getQuizReact } from '../api/QuizApi.js'
import { getQuizAngular } from '../api/QuizApi.js'
import { Link } from "react-router-dom"

class QuizPage extends Component {
    constructor(props) {
        super(props)
        this.updateQuestions = this.updateQuestions.bind(this)
        this.state = {
            props: [],
            isShown: false,
            myScore: 0,
            which: props.which
        }
    }

    componentDidMount() {
        const { props } = this.state;
        if (props.length === 0 && this.state.which === "React") {
            getQuizReact()
                .then(props1 => {
                    this.setState({
                        props: props1,
                    })
                })
        }
        else if (props.length === 0 && this.state.which === "Angular") {
            getQuizAngular()
                .then(props1 => {
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
        this.setState({ myScore: actualScore });
        console.log(actualScore)
    };

    updateQuestions(question) {
        var done = false;
        if (!done)
            this.setState((prevState) => {
                done = true
                console.log('added')
                let questions = prevState.props;
                questions.push(question);
                return { props: questions };
            });
    }

    updateQuiz = (action, body) => {
        switch (action) {
            case "PUSH":
                this.setState(state => {
                    var list = state.props;
                    list.push(body);
                    return { props: list };
                });
                break;
            default:
                break;
            case "PUT":
                this.setState(state => {
                    var list = state.props;
                    var qId = list.findIndex(q => q.Id === body.Id);
                    list[qId].Question = body.Question;
                    list[qId].Answers[0] = body.Answers[0];
                    list[qId].Answers[1] = body.Answers[1];
                    list[qId].Answers[2] = body.Answers[2];
                    list[qId].Answers[3] = body.Answers[3];

                    return { props: list }
                })
                break;
            case "DELETE":
                this.setState(state => {
                    var list = state.props;
                    var qId = list.findIndex(q => q.Id === body.Id);
                    list.splice(qId);
                    return { props: list }
                })
                break;
        }

    }
    render() {
        return (
            <div className="main1">
                <div className={styles.score} style={{ position: "fixed" }}>
                    <h1 style={{ marginTop: "1vh" }}>Aktualny wynik: {this.state.myScore}</h1>
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
                <Link to={`/score/${this.state.myScore}`} style={{ textDecoration: "none" }} className={styles.link}>Zakończ Quiz</Link>
                <div className="row">
                    <button
                        className={styles.Button2}
                        onClick={this.handleAdd}>
                        Dodaj Pytanie
                    </button>
                    {this.state.isShown ? (
                        <div>
                            <AddQuestion data={this.state.props} updateQuestions={this.updateQuestions} which={this.state.which} />
                        </div>

                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
    }
}
export default QuizPage;
