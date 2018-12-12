import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: 26},
      {name: "Manu", age: 28},
      {name: "Stephanie", age: 25}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button>Switch Name</button>
        < Person name="Chaim" age="26"/>
        < Person name="Raizy" age="24"/>
        < Person name="Dave" age="3" > I like tools </Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'duuuude'))
  }
}

export default App;
