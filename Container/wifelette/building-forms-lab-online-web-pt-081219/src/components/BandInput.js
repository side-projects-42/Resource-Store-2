import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default BandInput;
