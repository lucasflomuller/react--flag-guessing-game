import React, { Component } from "react";
import shuffle from "shuffle-array";
import FlagQuestion from "./FlagQuestion";
import "../styles/GuessingGame.css";

class GuessingGame extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      options: [],
      correctAnswer: undefined,
      answerText: undefined,
      countries: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then(data => data.json())
      .then(
        countries => {this.newQuestion(countries);},
        // Handling error
        error => {
          this.setState({ error });
        }
      );
  }

  newQuestion = (countries) => {
    const correctAnswer = Math.floor(Math.random() * countries.length);
    const options = this._getOptions(correctAnswer, countries);
    this.setState({
      correctAnswer,
      options,
      countries,
      answerText: undefined
    });
  };

  _getOptions(correctOption, countries) {
    let options = [correctOption];
    let tries = 0;
    while (options.length < 4 && tries < 15) {
      let option = Math.floor(Math.random() * countries.length);
      if (options.indexOf(option) === -1) {
        options.push(option);
      } else {
        tries++;
      }
    }
    return shuffle(options);
  }

  onGuess = (guess) => {
    const { correctAnswer } = this.state;
    if (correctAnswer === guess) {
      this.setState({ answerText: "Right Answer, Congratulations" });
    } else {
      this.setState({ answerText: "Sorry, please try again" });
    }
  };

  render() {
    const { error, countries, options, correctAnswer, answerText } = this.state;
    let output = <div>Loading...</div>;
    if (error) {
      output = <h1>{"Error, please try again"}</h1>;
    } else {
      if (correctAnswer !== undefined) {
        const { flag } = countries[correctAnswer];
        const opts = options.map(opt => ({
          id: opt,
          name: countries[opt].name.common
        }));
        output = [
          <FlagQuestion
            key="flag-question-component"
            answerText={answerText}
            correctAnswer={correctAnswer}
            flagImage={flag}
            options={opts}
            onGuess={this.onGuess}
            newQuestion={this.newQuestion}
            countries={countries}
          />,
          <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "128px",
          }}>{flag}</div> 
        ];
      }
    }

    return output;
  }
}

export default GuessingGame;
