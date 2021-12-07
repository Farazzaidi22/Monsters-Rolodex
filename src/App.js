// import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';


class App extends Component{

  constructor(){
    super()

    this.state = {
      monsters: [
        {
          name: 'Mephisto',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc2'
        },
        {
          name: 'Zombie',
          id: 'asc3'
        },
      ]
    } 
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map( monster => (
          
          <h1 key={monster.id}> {monster.name} </h1>
        
          )
        )}
      </div>
    );
  }
}

export default App;
