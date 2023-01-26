import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./ParkList.css";

const parks = [
  { name: "High Park", location: "Toronto, ON", id: 1 },
  { name: "Trinity Bellwoods Park", location: "Toronto, ON", id: 2 },
  { name: "Riverdale Park", location: "Toronto, ON", id: 3 },
  { name: "Guild Park and Gardens", location: "Toronto, ON", id: 4 },
  { name: "Centennial Park", location: "Toronto, ON", id: 5 },
  { name: "Cedarvale Park", location: "Toronto, ON", id: 6 },
  { name: "Rouge National Urban Park", location: "Toronto, ON", id: 7 },
  { name: "Tommy Thompson Park", location: "Toronto, ON", id: 8 },
  { name: "Grenadier Pond", location: "Toronto, ON", id: 9 },
  { name: "James Gardens", location: "Toronto, ON", id: 10 },
  { name: "Mimico Waterfront Park", location: "Toronto, ON", id: 11 },
];

class ParkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      parksPerPage: 4,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { currentPage, parksPerPage } = this.state;

    // Logic for displaying current parks
    const indexOfLastPark = currentPage * parksPerPage;
    const indexOfFirstPark = indexOfLastPark - parksPerPage;
    const currentParks = parks.slice(indexOfFirstPark, indexOfLastPark);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(parks.length / parksPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <Navbar />
        <Jumbotron title="Park List" />
        <table className="table-center">
          <thead>
            <tr>
              <th>Park Name</th>
              <th>Location</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {currentParks.map((park) => (
              <tr key={park.id}>
                <td>{park.name}</td>
                <td>{park.location}</td>
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

export default ParkList;
