import React, {Component}  from 'react';
//import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }
  //mounting is when react puts our component in the page, it renders on the DOM for the first time. When it does that it calls whatever code inside the block.

  componentDidMount () {
    //making url request using fetch. Fetch returns a promise. The promise gives us the actual body of the response.
    // fetching from the url and convert to json format. Then we take the users that we got from it. And set the monsters to that array of users.
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users }))
  }

  // we can write our method, and use it in the render method in the search box as  handleChange ={this.handleChange} instead of handleChange={e => this.setState({ searchField: e.target.value })}. However, it throw error
  //because javascript doesnot set scope to this function to access the constructor or the state.  so, we need to define in our constructor ==> we need to bind it. if we use arrow function we do not need to bind it.
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }
 
  render() {
    const { monsters, searchField } =  this.state;
    // this equivalent to
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    // the first one is better

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
          <h1>Monster Rolodex</h1>
          <SearchBox 
          placeholder='search monsters'
          handleChange ={this.handleChange} 
          
          />
          <CardList monsters={filteredMonsters}>
         
          </CardList>
      </div>
    );
  }
}

export default App;
