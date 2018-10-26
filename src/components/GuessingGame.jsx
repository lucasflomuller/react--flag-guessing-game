import React, { Component } from 'react';
import "../styles/GuessingGame.css";

class GuessingGame extends Component {

  constructor() {
    super();
    this.state = {
      options: [],
      correctAnswer: "",
      answerText: ""
    };
  }
  
  render() { 
    return ( <div>GuessingGame</div> );
  }
}
 
export default GuessingGame;