import React, { Component } from 'react'
import styles from './question.module.css'
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleAnswer = (userAnswer) => {
        if (userAnswer === this.props.CorrectAnswer) {
            this.setState(() => {
                return { answer: "Poprawna odpowiedź!" };
            })
        }
        else {
            this.setState(() => {
                return { answer: "Niestety źle" };
            })
        }
    }
    render() {
        return (
            <div className = {styles.card}>
                <h2 style={{ marginLeft: "10%" }}>{this.props.Question}</h2>
                <div className="row1">
                    <div style={{ marginLeft: "10%" }}>
                        <p>{this.props.Answers[0]} <button className={styles.Button2} onClick={() => this.handleAnswer(1)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[1]} <button className={styles.Button2} onClick={() => this.handleAnswer(2)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[2]} <button className={styles.Button2} onClick={() => this.handleAnswer(3)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[3]} <button className={styles.Button2} onClick={() => this.handleAnswer(4)}>Zaznacz odpowiedź</button></p>
                    </div>
                </div>
                <p style={{ marginLeft: "70%", fontSize:"10px"}}>Id pytania: {this.props.Id}</p>
                <p style={{ marginLeft: "10%" }}> {this.state.answer}</p>
            </div>
        )
    }
}
export default Question