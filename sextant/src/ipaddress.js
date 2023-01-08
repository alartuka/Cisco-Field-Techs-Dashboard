import React, { Component, useEffect, useState } from "react";

import "./ipaddress.css";

class IPAddress extends Component {
  render() {
    let url = "https://api.ipify.org?format=json";
    if (this.props.ipVersion === "ipv6") {
      url = "https://api6.ipify.org?format=json";
    }
    return fetch(url)
      .then((response) => {
        <h3>{response.data.ip}</h3>;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default IPAddress;
