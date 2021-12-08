// import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {CardList} from './components/cards-list/card-list.component'


class App extends Component{

  constructor(){
    super()

    this.state = {
      monsters: []
    } 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( {monsters: users} ))
  }

  render() {
    return (
      <div className="App">
        
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
