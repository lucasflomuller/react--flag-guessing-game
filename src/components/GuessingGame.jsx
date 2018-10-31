import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import "../styles/GuessingGame.css";

class GuessingGame extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      options: [],
      correctAnswer: undefined,
      answerText: undefined,
      countries: []
    };
  }
  
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(data => data.json())
    .then(
      (countries) => {
      const correctAnswer = Math.floor(Math.random() * countries.length);
      const options = this._getOptions(correctAnswer, countries);
      this.setState({
        correctAnswer,
        options,
        countries
      });
      console.log(this.state)
    },
    // Handling error
    (error) => {
      this.setState({ error });
    })
  }

  _getOptions(correctOption, countries) {
    let options = [correctOption];
    let tries = 0;
    while (options.length < 4 && tries < 15) {
      let option = Math.floor(Math.random() * countries.length);
      if (options.indexOf(option) === -1 ) {
        options.push(option);
      } else {
        tries++;
      }
    }
    return shuffle(options);
  }

  render() { 
    return ( <div>GuessingGame</div> );
  }
}
 
export default GuessingGame;