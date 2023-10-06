import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Something about us</h2>
      <User name={"Nikhil (Functional Component)"} />
      <br />
      <UserClass name={"Nikhil (Class Component)"} />
    </div>
  );
};

export default About;
