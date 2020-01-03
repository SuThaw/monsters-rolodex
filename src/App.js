import React from 'react';
import {CardList} from './components/card-list/card-list.components';
import { SearchBox} from './components/search-box/search-box.component'
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();
    this.state= {
      monsters: [
      
    ],
    searchField: ''
    }
  }
  render(){
      const { monsters, searchField } = this.state;
      const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox  placeholder='search monsters' handleChange={
            e => {
              this.setState({searchField: e.target.value},()=> console.log(this.state))
            }
          }/>
          <CardList monsters={filterMonsters} >
      
          </CardList>
        </div>
    );
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
        
      })
      .then(data => {
        
        this.setState({
          monsters: data
        })
      })
  }
}
export default App;
