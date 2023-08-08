import './App.css';
import Table from './Table.js';
import Form from './Form.js';
import React, {Component} from 'react';


class App extends Component{
  state = {
    characters :[]
  };

  removeCharacter = index => {
    const{characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }
    handleSubmit = character => {
      this.setState({characters:[...this.state.characters, character]});
    }
    render(){
      const{characters} = this.state;
      return(
        <div className = "container">
          <h1>Welcome to TODO list</h1>
          <h3>Add new</h3>
          <Form handleChange = {this.handleSubmit}/>
          <br></br>
          <Table
            characterData = {characters}
            removeCharacter = {this.removeCharacter}
          />
        </div>
      )
    }
  }
export default App;
