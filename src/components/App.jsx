import React, { Component } from 'react';
import '../styles/App.css';
import Header from "./Header.jsx";
import MemoryGame from "./MemoryGame.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <MemoryGame />
      </div>
    );
  }
}

export default App;
