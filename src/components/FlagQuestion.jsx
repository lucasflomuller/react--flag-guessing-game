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
    this.handleGuess(optId);

    setTimeout(() => {
    this.props.newQuestion(this.props.countries)
    }, 800)
  };

  handleGuess = country => {
    this.props.onGuess(country);
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
      </div>
      );
    } else {
      return (
        <div>
          <form className="flag-form">
            {opts}
          </form>
        </div>
      );
    }
  }
}

export default FlagQuestion;
