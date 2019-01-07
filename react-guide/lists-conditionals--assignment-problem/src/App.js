import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './validationComponent';
import CharComponent from './charComponent';

class App extends Component {

  state = {
    string: '',
    longEnough: 'Text too short'
  }

  updateString = (event) => {
    const newString = event.target.value;
    if (newString.length > 5) {
      this.setState({longEnough: 'Text long enough'})
    }
    this.setState({string: event.target.value})
  }

  deleteChar = (index) => {
    let newString = this.state.string.split('')
    newString.splice(index, 1);
    let string = newString.join('')
    this.setState({string: string})
  }

  render() {
    let chars = (
      <div>
        {this.state.string.split('').map((char, index) => {
          return <CharComponent letter={char} key={index} clicked={() => this.deleteChar(index)}/>
        })}
      </div>
    )

    return (
      <div className="App">
        <input type="text" value={this.state.string} onChange={this.updateString} />
        <p>{this.state.string}</p>
        < ValidationComponent length={this.state.string.length} longEnough={this.state.longEnough}/>
        {chars}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
