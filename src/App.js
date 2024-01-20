import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
// import { Height } from '@mui/icons-material';
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <div style={{ backgroundColor: "red", height: "800px" }}></div>
        <div style={{ backgroundColor: "blue", height: "800px" }}></div>
        <div style={{ backgroundColor: "green", height: "800px" }}></div>
        <div style={{ backgroundColor: "yellow", height: "800px" }}></div>

        <Footer />
      </div>
    );
  }
}
export default App;
