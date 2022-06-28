import {Component} from "react";


import logo from './logo.svg';
import './App.css';
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
      {
        name: 'Linda',
        id: '1'
      },
      {
        name: 'Frank',
        id: '2'
      },
      {
        name: 'Jacky',
        id: '3'
      },
      {
        name: 'Dimitri',
        id: '4'
      },
    ]
      
    };
  }

  render() {
  return (
    <div className="App">
      {
        this.state.monster.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>
  );
  }
}

export default App;
