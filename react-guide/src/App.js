import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [
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
        < Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        < Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        < Person name={this.state.person[2].name} age={this.state.person[2].age} > I like tools </Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'duuuude'))
  }
}

export default App;
