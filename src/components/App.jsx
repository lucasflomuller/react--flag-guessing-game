import React, { Component } from 'react';
import '../styles/App.css';
import Header from "./Header.jsx";
import GuessingGame from "./GuessingGame";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <GuessingGame />
      </div>
    );
  }
}

export default App;
