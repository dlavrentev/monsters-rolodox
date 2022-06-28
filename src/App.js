import {Component} from "react";


import logo from './logo.svg';
import './App.css';
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: "Dimitri", lastName: "Lavrentev"},
      company: "Mimo"
    }
  }

  render() {
  return (
    <div className="App">
      
    </div>
  );
  }
}

export default App;
