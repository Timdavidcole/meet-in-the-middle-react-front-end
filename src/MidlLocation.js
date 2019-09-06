import React from "react";
import MidlPlaces from "./MidlPlaces";

class MidlLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: 10 }}>
        <p
          style={{ marginLeft: "10px", fontFamily: "Verdana", padding: "5px" }}
        >
          Your Midl point is: {this.props.midlLocation}
        </p>
        <div>
          <MidlPlaces places={this.props.places} />
        </div>
      </div>
    );
  }
}

export default MidlLocation;
