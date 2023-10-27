import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-md">
      <div className="logo-container">
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4">{onlineStatus ? "👍🏻" : "👎🏻"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtnName === "Login"
                ? setLoginBtnName("Logout")
                : setLoginBtnName("Login");
            }}
          >
            {loginBtnName}
          </button>
          <li className="px-4 font-semibold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
