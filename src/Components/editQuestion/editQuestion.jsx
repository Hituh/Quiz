import React from "react";
import styles from "./editQuestion.module.css";
import {editQuestion} from '../api/QuizApi.js'
import PropTypes from 'prop-types';
class EditQuestion extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Id: this.props.data.Id,
            Question: this.props.data.Question,
            Answer1: this.props.data.Answers[0],
            Answer2: this.props.data.Answers[1],
            Answer3: this.props.data.Answers[2],
            Answer4: this.props.data.Answers[3],
            CorrectAnswer: this.props.data.CorrectAnswer,
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    submitForm(event) {
        event.preventDefault();
        
        var editedQuestion = {
            Id: Number(this.state.Id),
            Question: this.state.Question,
            Answers: [this.state.Answer1, this.state.Answer2, this.state.Answer3, this.state.Answer4],
            CorrectAnswer: Number(this.state.CorrectAnswer),
        };

            editQuestion(this.state.Id, editedQuestion); //to do bazy
            this.props.update("PUT", editedQuestion) //to do state w quizPage
            
        
    };
    render() {
        return (
            <div>
                <div className={styles.cont}>
                    <div className={styles.form_container}>
                        <form>
                            <h2>Edytuj Pytanie</h2>

                            <div>
                                <label>Pytanie</label>
                                <input type="text" className="form-control" name="Question"
                                    value={this.state.Question}
                                    onChange={this.handleUserInput} 
                                    />
                            </div>

                            <div>
                                <label>Odpowiedź 1</label>
                                <input type="text" required className="form-control" name="Answer1"
                                    value={this.state.Answer1}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 2</label>
                                <input type="text" required className="form-control" name="Answer2"
                                    value={this.state.Answer2}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 3</label>
                                <input type="text" required className="form-control" name="Answer3"
                                    value={this.state.Answer3}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Odpowiedź 4</label>
                                <input type="text" required className="form-control" name="Answer4"
                                    value={this.state.Answer4}
                                    onChange={this.handleUserInput} />
                            </div>

                            <div>
                                <label>Poprawna odpowiedź</label>
                                <input type="text" required className="form-control" name="CorrectAnswer"
                                    value={this.state.CorrectAnswer}
                                    onChange={this.handleUserInput} />
                            </div>

                            <button className={styles.Button2} onClick={this.submitForm.bind(this)}>
                                Zatwierdź Edycję
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditQuestion;
EditQuestion.propTypes = {
    contactList: PropTypes.shape({
        Id:PropTypes.number.isRequired,
        Question: PropTypes.string.isRequired,
        Answer: PropTypes.array,
        CorrectAnswer: PropTypes.string.isRequired,
      }),
  };

