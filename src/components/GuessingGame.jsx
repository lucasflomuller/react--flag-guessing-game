import React, { Component } from "react";
import shuffle from "shuffle-array";
import FlagQuestion from "./FlagQuestion";
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
        countries => {
          const correctAnswer = Math.floor(Math.random() * countries.length);
          const options = this._getOptions(correctAnswer, countries);
          this.setState({
            correctAnswer,
            options,
            countries
          });
          console.log(this.state);
        },
        // Handling error
        error => {
          this.setState({ error });
        }
      );
  }

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

  render() {
    const { error, countries, options, correctAnswer, answerText } = this.state;
    let output = <div>Loading...</div>;
    if (error) {
      output = <h1>Error, please try again</h1>;
    } else {
      if (correctAnswer !== undefined) {
        const { flag, name } = countries[correctAnswer];
        const opts = options.map(opt => ({
          id: opt,
          name: countries[opt].name
        }));
        output = <FlagQuestion answerText={name} />;
      }
    }

    return output;
  }
}

export default GuessingGame;
