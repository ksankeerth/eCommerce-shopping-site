import React, { Component } from 'react';
import './App.css';

import Header from './components/home/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
      </div>
    );
  }
}

export default App;