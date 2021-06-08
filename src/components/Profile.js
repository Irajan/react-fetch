import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{`${this.props.name.title}. ${this.props.name.first} ${this.props.name.last}`}</h1>
        <img alt="Profile" src={this.props.image}></img>
        <br />
        <button onClick={this.props.onClick}>Get new user.</button>
      </div>
    );
  }
}

export default Profile;
