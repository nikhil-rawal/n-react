import React from "react";

class UserClass extends React.Component {
  //constructor
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Default",
        location: "Default",
      },
    };
  }

  //component mount
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikhil-rawal");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  //render
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Descrease
        </button>

        <h4>{this.state.count}</h4>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
