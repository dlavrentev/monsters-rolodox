import {Component} from "react";
import logo from './logo.svg';
import './App.css';
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      
  }

  render() {
  return (
    <div className="App">
      {
        this.state.monster.map((monster) => {
          return <div key={monster.id}>
                    <h1>{monster.name}</h1>
                  </div>
        })
      }
    </div>
  );
  }
}

export default App;
