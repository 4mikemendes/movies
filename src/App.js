import React, { Component } from 'react';
import './styles/App.css';
import SearchMovies from "./components/SearchMovies.js"

class App extends Component {

render(){
  return (
    <div className="App">
      <h1 className= "title">React Movie App</h1>
      <SearchMovies />
    </div>
  )
}
}

export default App;
