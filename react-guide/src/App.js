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

  switchNameHandler = () => {
    //console.log('Clicked!!')
    this.setState({ 
      person: [
        {name: "Maxy", age: 26},
        {name: "Manu", age: 28},
        {name: "Stephanie", age: 24543}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        < Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        < Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        < Person name={this.state.person[2].name} age={this.state.person[2].age} click={this.switchNameHandler}> I like tools </Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'duuuude'))
  }
}

export default App;
