import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import ParkList from './pages/ParkList.jsx';
import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/parkList" component={ParkList}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
