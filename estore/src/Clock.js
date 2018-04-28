import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() };
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <h1>
        {this.props.format} - {this.state.time}
      </h1>
    );
  }
}

export default Clock;
