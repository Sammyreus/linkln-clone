import React, { Component } from 'react';
import './App.css';
import Headers from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feeds/Feeds';
class App extends Component {
  render() {
    return (
      <div className='app'>
      <Headers />
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
      
      </div>
      </div>
    );
  }
}

export default App;
