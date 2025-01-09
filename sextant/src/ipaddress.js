import React, { Component } from "react";

let url = "https://api.ipify.org?format=json";

class IPAddress extends Component {
  constructor(props) {
    super(props);
    if (this.props.ipVersion === "ipv6") {
      url = "https://api64.ipify.org?format=json";
    };

    this.state = {
      url: url,
      ipAddress: null,
    };
  }

  render() {
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => this.setState({ ipAddress: data.ip })
      .catch((error) => {
        console.error(error);
      })
      ); for all

    return (
      <div className="ipAddress_display">
        {this.state.ipAddress}
      </div>
      )
  }
}

export default IPAddress;
