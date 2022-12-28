import React, { Component } from 'react'
import styles from './question.module.css'
import EditQuestion from "../editQuestion/editQuestion";
import {deleteQuestion} from '../api/QuizApi.js'

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
    handleDelete = () =>{
        this.props.data("DELETE", this.props.Id);
        deleteQuestion(this.props.Id)
    }
    
    render() {
        return (
            <>
            <div className = {styles.card}>
                <h2 style={{ marginLeft: "7%", color:"white"}}>{this.props.Question}</h2>
                <div className="row1">
                    <div className={styles.questions}>
                        <p>{this.props.Answers[0]} <button className={styles.Button2} onClick={() => this.handleAnswer(1)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[1]} <button className={styles.Button2} onClick={() => this.handleAnswer(2)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[2]} <button className={styles.Button2} onClick={() => this.handleAnswer(3)}>Zaznacz odpowiedź</button></p>
                        <p>{this.props.Answers[3]} <button className={styles.Button2} onClick={() => this.handleAnswer(4)}>Zaznacz odpowiedź</button></p>
                    </div>
                </div>
                <p style={{ marginLeft: "70%", fontSize:"10px"}}>Id pytania: {this.props.Id}  <button className={styles.editButtons} style={{marginLeft:"40%"}}>Edytuj</button><button className={styles.editButtons} onClick={this.handleDelete}>X</button></p>
                <p style={{ marginLeft: "40%", color:"#3b43de", fontSize:"2.5vh", fontWeight:"700"}}> {this.state.answer} </p>
            </div>
            <div>
                <EditQuestion data={this.props} update={this.props.data}/>
            </div>
        </>
        )
    }
}
export default Question