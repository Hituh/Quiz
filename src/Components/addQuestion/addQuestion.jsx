import React from "react";
import styles from "./addQuestion.module.css";
import {addQuestion} from '../api/QuizApi.js'
import {addQuestionA} from '../api/QuizApi.js'
import PropTypes from "prop-types";
class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            Id: "",
            Question: "",
            Answer1: "",
            Answer2: "",
            Answer3: "",
            Answer4: "",
            CorrectAnswer: "",
            formErrors: { email: "", password: "" },
            idValid: true,
            questionValid: false,
            answer1Valid: false,
            answer2Valid: false,
            answer3Valid: false,
            answer4Valid: false,
            correctAnswerValid: false,
            formValid: false,
            which: props.which
        };
        this.quizInfo = JSON.parse(localStorage.getItem("quizData"));
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let idValid = this.state.idValid;
        let questionValid = this.state.questionValid;
        let answer1Valid = this.state.answer1Valid;
        let answer2Valid = this.state.answer2Valid;
        let answer3Valid = this.state.answer3Valid;
        let answer4Valid = this.state.answer4Valid;
        let correctAnswerValid = this.state.correctAnswerValid;

        switch (fieldName) {
            case 'Id':
                if(value != null)
                for(var i = 0; i <this.props.data.length; i++){
                    idValid = (value == this.props.data[i].Id) // tu musi byc tylko == bo === nie dziala
                    if(idValid) break;
                }                
                break;
            case 'Question':
                questionValid = value.length >= 3;
                break;
            case 'Answer1':
                answer1Valid = value.length >= 3;
                break;
            case 'Answer2':
                answer2Valid = value.length >= 3;
                break;
            case 'Answer3':
                answer3Valid = value.length >= 3;
                break;
            case 'Answer4':
                answer4Valid = value.length >= 3;
                break;
            case 'CorrectAnswer':
                correctAnswerValid = (value <=4 && value >=1);
                break;

            default:
                break;
        }
        this.setState({
            idValid: idValid,
            questionValid: questionValid,
            answer1Valid: answer1Valid,
            answer2Valid: answer2Valid,
            answer3Valid: answer3Valid,
            answer4Valid: answer4Valid,
            correctAnswerValid: correctAnswerValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: !this.state.idValid && this.state.questionValid && this.state.answer1Valid && this.state.answer2Valid && this.state.answer3Valid && this.state.answer4Valid && this.state.correctAnswerValid && this.state.correctAnswerValid });
    }

    submitForm(event) {
        event.preventDefault();
        
        var newQuestion = {
            Id: Number(this.state.Id),
            Question: this.state.Question,
            Answers: [this.state.Answer1, this.state.Answer2, this.state.Answer3, this.state.Answer4],
            CorrectAnswer: Number(this.state.CorrectAnswer),
        };
    
            this.props.updateQuestions(newQuestion)
            if(this.state.which === "React"){addQuestion(newQuestion);}
            else if(this.state.which === "Angular"){addQuestionA(newQuestion);}
    };
    render() {
        return (
            <div>
                <div className={styles.cont}>
                    <div className={styles.form_container}>
                        <form>
                            <h2>Dodaj Pytanie</h2>
                            <div>
                                <label>Id</label>
                                <input type="number" required className="form-control" name="Id"
                                    placeholder="2"
                                    value={this.state.Id}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Pytanie</label>
                                <input type="text" className="form-control" name="Question"
                                    placeholder="Czy można?"
                                    value={this.state.Question}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 1</label>
                                <input type="text" required className="form-control" name="Answer1"
                                    placeholder="Tak"
                                    value={this.state.Answer1}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 2</label>
                                <input type="text" required className="form-control" name="Answer2"
                                    placeholder="Nie"
                                    value={this.state.Answer2}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 3</label>
                                <input type="text" required className="form-control" name="Answer3"
                                    placeholder="Chyba"
                                    value={this.state.Answer3}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 4</label>
                                <input type="text" required className="form-control" name="Answer4"
                                    placeholder="Może"
                                    value={this.state.Answer4}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Poprawna odpowiedź</label>
                                <input type="text" required className="form-control" name="CorrectAnswer"
                                    placeholder="1"
                                    value={this.state.CorrectAnswer}
                                    onChange={this.handleUserInput} />
                            </div>
                            <div style={{ color: "#F06292", marginBottom: "2vh" }}>
                                {this.state.idValid && <p>Już istnieje pytanie o takim id</p>}
                                {!this.state.questionValid && <p>Tytuł  musi mieć co najmniej 3 znaki</p>}
                                {!this.state.answer1Valid && <p>Odpowiedź musi mieć co najmniej 3 znaki</p>}
                                {!this.state.answer2Valid && <p>Odpowiedź musi mieć co najmniej 3 znaki</p>}
                                {!this.state.answer3Valid && <p>Odpowiedź musi mieć co najmniej 3 znaki</p>}
                                {!this.state.answer4Valid && <p>Odpowiedź musi mieć co najmniej 3 znaki</p>}
                                {!this.state.correctAnswerValid && <p>Poprawna odpowiedź musi być z przedziału 1-4</p>}

                            </div>

                            <button className={styles.Button2} onClick={this.submitForm.bind(this)} disabled={!this.state.formValid}>
                                Dodaj Pytanie
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddQuestion;

AddQuestion.propTypes = { 
    data: PropTypes.array.isRequired,
    updateQuestions: PropTypes.func.isRequired,
    which: PropTypes.string.isRequired
} 