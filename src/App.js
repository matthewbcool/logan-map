import React, { Component } from 'react'
import './App.css'
import LoganMap from './Components/LoganMap'
import BottomFilters from './Components/BottomFilters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoganMap />
        <BottomFilters />
      </div>
    );
  }
}

export default App;
