import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./ParkList.css";
import ParkNavBar from "../components/ParkNavBar.jsx";

const events = [
  {
    name: "Concert",
    location: "Central Park",
    date: "2022-05-01",
    time: "7:00pm",
    id: 1,
  },
  {
    name: "Food Festival",
    location: "Union Square",
    date: "2022-06-15",
    time: "12:00pm",
    id: 2,
  },
  {
    name: "Farmers Market",
    location: "Washington Square Park",
    date: "2022-07-20",
    time: "9:00am",
    id: 3,
  },
  {
    name: "Art Expo",
    location: "Madison Square Park",
    date: "2022-08-10",
    time: "11:00am",
    id: 4,
  },
  {
    name: "Wine Tasting",
    location: "Prospect Park",
    date: "2022-09-05",
    time: "6:00pm",
    id: 5,
  },
];
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      eventsPerPage: 4,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { currentPage, eventsPerPage } = this.state;

    // Logic for displaying current events
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(events.length / eventsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <Navbar />
        <Jumbotron title="Event List" />
        <ParkNavBar className="NavBar" />
        <table className="table-center">
          <thead>
          <tr>
            <th>Event Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>View</th>
          </tr>
          </thead>
          <tbody>
            {currentEvents.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
          <div className="pagination-buttons">
            {pageNumbers.map((number) => (
              <button key={number} id={number} onClick={this.handleClick}>
                {number}
              </button>
            ))}
          </div>
        </table>
        <Footer />
      </div>
    );
  }
}

export default Event