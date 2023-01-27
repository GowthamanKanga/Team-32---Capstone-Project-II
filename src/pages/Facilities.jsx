import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";

class Faciltlies extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="Put something witty here!" />
        <div className="container">
          <h2>About Us</h2>
          <p>
            The George Brown Company aims to serve the public through the use of
            their online application. This application is designed to assist
            individuals in gathering information about specific parks and
            leisure locations. The company's objective is to make it easier for
            people to find and learn about the parks and recreational areas in
            their community.{" "}
          </p>
          <p>
            One of the main goals of the George Brown Company is to help
            individuals easily access information about the parks and leisure
            locations in their area. The online application provides a
            user-friendly platform that allows individuals to quickly and
            efficiently find the information they need. This can include details
            such as location, amenities, and even upcoming events. By providing
            this information, the company hopes to make it easier for people to
            plan their visits to the park and make the most of their leisure
            time.{" "}
          </p>
          <p>
            Additionally, the George Brown Company's online application also
            allows users to provide feedback and ratings on parks and
            recreational areas they have visited. This allows the company to
            gather valuable insights and identify areas for improvement,
            ultimately leading to a better user experience. The company is
            dedicated to constantly improving and updating the application to
            better serve the needs of the public. Overall, the George Brown
            Company's objective is to enhance the public's experience with their
            local parks and recreational areas through the use of their online
            application.{" "}
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Faciltlies;
