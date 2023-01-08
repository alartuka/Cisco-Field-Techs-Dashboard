import React, { Component } from "react";
import "./App.css";
import Banner from "./banner";
import Exhibit from "./exhibit";
import IPAddress from "./ipaddress";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="Sextant" />
        <Exhibit name="Exhibit #1" version="ipv4">
          {/* <IPAddress ipVersion="ipv4" /> */}
        </Exhibit>
        <Exhibit name="Exhibit #2" version="ipv6">
          {/* <IPAddress ipVersion="ipv6" /> */}
        </Exhibit>
      </div>
    );
  }
}

export default App;
