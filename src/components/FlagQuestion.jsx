import React, { Component } from "react";

class FlagQuestion extends Component {
  constructor() {
    super();
    this.state = {
      selectedCountry: ""
    };
  }

  handleChange = () => {
    // Implement change
  };

  render() {
    const { correctAnswer, flagImage, options } = this.props;
    let opts = options.map(opt => (
      <label key={opt.id}>
        <input
          type="radio"
          value={opt.id}
          checked={opt.checked}
          // onChange={handleChange}
          name="flag-choice"
        />
        {opt.name}
      </label>
    ));
    return (
      <div className="flag-question">
        <form>{opts}</form>
        <img src={flagImage} alt="Flag" />
      </div>
    );
  }
}

export default FlagQuestion;
