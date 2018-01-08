import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'February 1, 2018',
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-title">
          The old world calls
        </div>
        <Clock 
        deadline = {this.state.deadline}
        />
      </div>
    )
  }
}


export default App;
