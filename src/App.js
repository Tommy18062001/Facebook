import React, { Component } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Middle from './Middle'

export class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* Header */}
        <Header />

        {/* Right */}
        <Left />

        {/* Middle */}
        <Middle />

        {/* Left */}
        <Right />
      </div>
    )
  }
}

export default App
