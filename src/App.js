// import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {CardList} from './components/cards-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'



class App extends Component{

  constructor(){
    super()

    this.state = {
      monsters: [],
      searchFiled: ''
    } 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( {monsters: users} ))
  }

  render() {

    const {monsters, searchFiled } = this.state
    const filteredMonsters = monsters.filter( monster => 
                            monster.name.toLowerCase().includes(searchFiled.toLowerCase()))

    return (
      <div className="App">
        
        <SearchBox 
            placeholder='search for monsters'
            handleChange={e => this.setState({ searchFiled: e.target.value })}
        />
 

        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
