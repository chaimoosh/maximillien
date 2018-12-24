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

  switchNameHandler = (newName) => {
    //console.log('Clicked!!')
    this.setState({ 
      person: [
        {name: newName, age: 26},
        {name: "Manu", age: 28},
        {name: "Stephanie", age: 24543}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        {name: "Max", age: 26},
        {name: event.target.value, age: 28},
        {name: "Stephanie", age: 25}
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Fatso')}>Switch Name</button>
        < Person 
         name={this.state.person[0].name}
         age={this.state.person[0].age}/>
        < Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Guatemala')
          changed={this.nameChangedHandler}
          }/>
        < Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age} 
          click={this.switchNameHandler.bind(this, 'Carla')}> I like tools </Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'duuuude'))
  }
}

export default App;
