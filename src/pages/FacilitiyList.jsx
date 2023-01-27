import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./FacilityList.css";
import ParkNavBar from "../components/ParkNavBar.jsx";


const facilities = [
    { id: 1, facilityName: "Volleyball", facilityDescription: "", price: 100.99 },
    { id: 2, facilityName: "Football", facilityDescription: "Head Injury dangerous facility =)", price: 99.99 },
    { id: 3, facilityName: "Basketball", facilityDescription: "", price: 65.99 },
    { id: 4, facilityName: "Baseball", facilityDescription: "", price: 99.99 },
];

class FacilityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            facilitiesPerPage: 4,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id),
        });
    }

    render() {
        const { currentPage, facilitiesPerPage } = this.state;

        // Logic for displaying current parks
        const indexOfLastFacility = currentPage * facilitiesPerPage;
        const indexOfFirstFacility = indexOfLastFacility - facilitiesPerPage;
        const currentFacilities = facilities.slice(indexOfFirstFacility, indexOfLastFacility);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(facilities.length / facilitiesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <Navbar />
                <Jumbotron title="Facility List" />
                <ParkNavBar />
                <table className="table-center">

                    <thead>
                        <tr>
                            <th>Item(s) Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentFacilities.map((facility) => (
                            <tr key={facility.id}>
                                <td>{facility.facilityName}</td>
                                <td>{facility.facilityDescription}</td>
                                <td>{facility.price}</td>
                                <td>
                                    <button>View</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
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

export default FacilityList;