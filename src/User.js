import React, { Component } from "react";

class User extends Component {
  state = {};
  render() {
    console.log(this.props, "props");
    const { username } = this.props;
    const { age } = this.props
    console.log(username);
    return (
      <div>
        <h1>Hello:{username}</h1>
        <br />
    <h1>Age:{age}</h1>
      </div>
    );
  }
}

export default User;
