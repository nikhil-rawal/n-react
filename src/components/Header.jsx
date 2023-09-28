import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
