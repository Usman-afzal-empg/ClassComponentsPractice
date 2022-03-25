import React, { Component, Fragment } from "react";
class Example extends Component {
  state = {
    name: "",
    count: 0,
  };
  constructor(props) {
    super(props);
    console.log("In the constructor method");
  }
  componentDidMount() {
    console.log("In the component did mount method");
  }
  componentWillUnmount() {
    console.log("In the component will mount method");
  }
  componentDidUpdate() {
    console.log("In the component did update method");
  }
  componentDidCatch() {
    console.log("In the component did catch method");
  }
  static getDerivedStateFromProps(props, state) {
    return state;
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUnmount() {
    debugger;

    console.log("In the component will unmount method");
  }
  render() {
    debugger;

    console.log("In the render method");
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
