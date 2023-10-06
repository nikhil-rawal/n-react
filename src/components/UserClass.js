import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Toronto</h3>
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
