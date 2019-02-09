import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Clock from './component/Clock/Clock'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'

library.add(faClock)
class App extends Component {
  render() {
    return (
      <div className="App bg">
        <Header />
        <Clock />
      </div>
    );
  }
}

export default App;
