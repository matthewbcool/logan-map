import React, { Component } from 'react'
import './App.css'
import LoganMap from './Components/LoganMap'
import BottomFilters from './Components/BottomFilters'
import SideBar from './Components/SideBar'

class App extends Component {
  state = {
    open: ''
  }
  render() {
    return (
      <div className="wrapper">
        <div className="map-and-search-wrapper">
          <SideBar />
          <LoganMap isModalOpen={this.state.open} />
        </div>
        <BottomFilters />
      </div>
    );
  }
}

export default App;
