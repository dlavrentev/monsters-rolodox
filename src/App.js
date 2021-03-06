import {Component} from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
      return { monsters: users };
    },
    () => {
      console.log(this.state);
    }
    ));
  }

  render() {
    console.log('render')
  return (
    <div className="App">
      <input className="search-box"
        type='search'
        placeholder='search monsters'
        onChange={(e) => {
           console.log(e.target.value);
           const searchString = e.target.value.toLocaleLowerCase();
           // [ { name: 'Leanne'}, {name: 'Yihua'} ]
           const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(e.target.value);
           });

           this.setState(() => {
            return { monsters: filteredMonsters }
           })
      }}
      />
      {this.state.monsters.map((monster) => {
          return (
                  <div key={monster.id}>
                    <h1>{monster.name}</h1>
                  </div>
          );
        })}
    </div>
  );
  }
}

export default App;
