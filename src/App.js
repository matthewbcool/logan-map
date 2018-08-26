import React, { Component } from 'react'
import './App.css'
import LoganMap from './Components/LoganMap'
import BottomFilters from './Components/BottomFilters'
import SideBar from './Components/SideBar'

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="wrapper">
        <div className="map-and-search-wrapper">
          <SideBar />
          <LoganMap  />
        </div>
        <BottomFilters />
      </div>
    );
  }
}

export default App;
