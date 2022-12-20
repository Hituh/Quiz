import React, {Component} from 'react'
import './question.css'
class Question extends Component{
    constructor(props){
		super(props);
		this.state = {
			answer: ""
		};
	} 
    handleA = () => {
        if(this.props.data.Answer === 1){
            this.setState(() => {
                return {answer: "Prawda"};
           })
        }
       else{
        this.setState(() => {
            return {answer: "Fałsz"};
       })
       }
      }
      handleB = () => {
        if(this.props.data.Answer === 2){
            this.setState(() => {
                return {answer: "Prawda"};
           })
        }
        else{
            this.setState(() => {
                return {answer: "Fałsz"};
           })
           }
      }
      handleC = () => {
        if(this.props.data.Answer === 3)
        this.setState(() => {
            return {answer: "Prawda"};
       })
       else{
        this.setState(() => {
            return {answer: "Fałsz"};
       })
       }
      }
      handleD = () => {
        if(this.props.data.Answer === 4)
        this.setState(() => {
            return {answer: "Prawda"};
       })
       else{
        this.setState(() => {
            return {answer: "Fałsz"};
       })
       }
      }
      render(){
    return (
        <div className="example-container1">
            <h2 style={{marginLeft:"10%"}}>{this.props.data.Question}</h2>
            <div className="row1">
            <div style={{marginLeft:"10%"}}>
            <p>{this.props.data.Options[0]}</p>
            <p>{this.props.data.Options[1]}</p>
            <p>{this.props.data.Options[2]}</p>
            <p>{this.props.data.Options[3]}</p>
            </div>
            
            <div style={{marginLeft:"10%"}}>
                <p><input type="button" value="Odp A" onClick={() => this.handleA()}/></p>
                <p><input type="button" value="Odp B" onClick={() => this.handleB()}/></p>
                <p><input type="button" value="Odp C" onClick={() => this.handleC()}/></p>
                <p><input type="button" value="Odp D" onClick={() => this.handleD()}/></p>                                                                                          
            </div>
            </div>
            <p style={{marginLeft:"10vh"}}>ODPOWIEDŹ: {this.state.answer}</p> 
        </div>
    )}
}
export default Question