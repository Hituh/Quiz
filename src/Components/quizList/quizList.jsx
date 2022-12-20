import React, { Component } from "react";
import AddQuizButton from "../addQuizButton/addQuizButton";
import QuizItem from "../quizItem/quizItem";
import "./quizList.css";



class QuizList extends Component {
        state = {
            quizes: [{Id: 0,Title: "Angular", Questions:[{Question:"Pytanie nr 1?", Options:["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"],Answer:1},
            {Question:"Pytanie nr 2?", Options:["Odp nr 12", "Odp nr 22", "Odp nr 32", "Odp nr 42"],Answer:2},
            {Question:"Pytanie nr 3?", Options:["Odp nr 13", "Odp nr 23", "Odp nr 33", "Odp nr 43"],Answer:3},
            {Question:"Pytanie nr 4?", Options:["Odp nr 14", "Odp nr 24", "Odp nr 34", "Odp nr 44"],Answer:4}],
            Picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png"},
            {Id: 1,Title: "React", Questions:[{Question:"Pytanie nr 1?", Options:["Odp nr 1", "Odp nr 2", "Odp nr 3", "Odp nr 4"]},
            {Question:"Pytanie nr 2?", Options:["Odp nr 12", "Odp nr 22", "Odp nr 32", "Odp nr 42"],Answer:1},
            {Question:"Pytanie nr 3?", Options:["Odp nr 13", "Odp nr 23", "Odp nr 33", "Odp nr 43"],Answer:1},
            {Question:"Pytanie nr 4?", Options:["Odp nr 14", "Odp nr 24", "Odp nr 34", "Odp nr 44"],Answer:1},
            {Question:"Pytanie nr 5?", Options:["Odp nr 15", "Odp nr 25", "Odp nr 35", "Odp nr 45"],Answer:1}],
            Picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"}]
        }

    render() {
        return (
            <><ul className="ul1">
                {this.state.quizes.map((data1, key) => (
                    <li className="li1" key={key}>
                        <QuizItem data={data1}/>
                    </li>
                ))}
            </ul>
            <AddQuizButton />
           </>
        );
    }
}
export default QuizList;