import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import ParkList from './pages/ParkList.jsx';
//import Contact from './pages/Contact.jsx';
import ParkPage from './pages/ParkPage'
import Event from './pages/Event';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/parkList" component={ParkList}/>
          <Route path="/parkPage" component={ParkPage}/>
          <Route path="/event" component={Event}/>
        </div>
      </Router>
    );
  }
}

export default App;
