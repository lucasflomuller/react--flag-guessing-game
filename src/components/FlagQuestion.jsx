import React, { Component } from "react";

class FlagQuestion extends Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: ""
    };
  }

  handleChange(optId) {
    // Implement change
    this.setState({ selectedCountry: optId });
  }

  handleGuess = e => {
    this.props.onGuess(e, this.state.selectedCountry);
    this.setState({ guessed: true });
  };

  render() {
    const { options } = this.props;
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
    return (
      <div className="flag-question">
        <form>
          {opts}
          <button onClick={this.handleGuess.bind(this)}>Guess!</button>
        </form>
      </div>
    );
  }
}

export default FlagQuestion;
