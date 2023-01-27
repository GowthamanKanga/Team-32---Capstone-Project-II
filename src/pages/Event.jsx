import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ParkNavBar from "../components/ParkNavBar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";


class Event extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Event Page" subtitle="Put something witty here!" />
        <ParkNavBar className="NavBar"/>
        <div className="container">
          
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Event;
