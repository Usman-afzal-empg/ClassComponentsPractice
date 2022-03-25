import React, { Component, Fragment } from "react";

class Example extends Component {
  state = {
    name: "",
    count: 0,
  };
  render() {
    const { name, count } = this.state;
    return (
      <Fragment>
        <input type="text" value={name} onChange={this.handleNameChange} />
        {count > 0 && (
          <div>
            {name} has clicked {count} times
          </div>
        )}

        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
      </Fragment>
    );
  }
  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };
}
export default Example;
