import React, { Component } from 'react';
import "../styles/MemoryGame.css";

class MemoryGame extends Component {

  constructor() {
    super();
    this.state = {
      options: [],
      correctAnswer: "",
      answerText: ""
    };
  }
  
  render() { 
    return ( <div>MemoryGame</div> );
  }
}
 
export default MemoryGame;