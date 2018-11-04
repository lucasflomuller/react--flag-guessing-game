import React, { Component } from "react";
import "../styles/FlagQuestion.css";

class FlagQuestion extends Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: undefined
    };
  }

  handleChange = optId => {
    this.setState({ selectedCountry: optId });
  };

  handleNewQuestion = e => {
    this.props.newQuestion(e, this.props.countries)
  }

  handleGuess = e => {
    this.props.onGuess(e, this.state.selectedCountry);
    this.setState({ selectedCountry: undefined });
  };

  render() {
    const { options, answerText } = this.props;
    let opts = options.map(opt => (
      <label key={opt.id}>
        <input
          type="radio"
          value={opt.id}
          checked={opt.checked}
          onChange={() => this.handleChange(opt.id)}
          name="flag-choice"
        />
        {opt.name}
      </label>
    ));
    if (answerText !== undefined) {
      return (
      <div className="flag-answer">
        {answerText}
        <button onClick={this.handleNewQuestion}>Next</button>
      </div>
      );
    } else {
      return (
        <div>
          <form className="flag-form">
            {opts}
            <button onClick={this.handleGuess}>Guess!</button>
          </form>
        </div>
      );
    }
  }
}

export default FlagQuestion;
