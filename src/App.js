import React, { Component } from 'react';
import './App.css';
import GuessCount from './GuessCount';
import Reset from './Reset';
import Card from './Card';

class App extends Component {

  handleCardClick(card){
    console.log(card, 'clickCard');
  }

  handleResetClick(reset){
      console.log('resetClick');
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0;
    return (
      <div className="memory">
        <GuessCount guesses={0}/>
        <Card card="1" feedback="hidden" onClick={this.handleCardClick}/>
        <Card card="2" feedback="justMatched" onClick={this.handleCardClick}/>
        <Card card="3" feedback="justMismatched" onClick={this.handleCardClick}/>
        <Card card="4" feedback="visible" onClick={this.handleCardClick}/>
        <Card card="5" feedback="hidden" onClick={this.handleCardClick}/>
        <Card card="6" feedback="justMatched" onClick={this.handleCardClick}/>    
        {won && <p>Gagné!</p>}  
        <Reset onClick={this.handleResetClick}/>
      </div>
    )
  }
}

export default App