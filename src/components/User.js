import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Toronto</h3>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Descrease
      </button>
      <h4>{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default User;
