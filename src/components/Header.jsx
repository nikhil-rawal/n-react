import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import theForklogo from "../theForklogo.jpg";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  //subscribing to store using useSelector-hook/selector
  const cartItems = useSelector((store) => store.cart.items);

  const HeaderElement = ({ linkTo, svgElement, headerText }) => {
    return (
      <li className="px-2 md:px-5 lg:px-6">
        <Link to={linkTo}>
          <span className="flex flex-row gap-0.5 md:gap-2 2xl:text-2xl">
            {svgElement}
            {headerText}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <div className="flex items-center justify-between border-b shadow-sm border-gray-100">
      <div className="flex py-0 md:px-2">
        <Link to="/">
          <img
            className="w-[5rem] md:w-[9.5rem]"
            src={theForklogo}
            alt="The Fork"
          />
        </Link>
      </div>
      <div className="flex py-0 md:px-8">
        <ul className="flex justify-evenly">
          <li className="px-2 md:px-5 lg:px-6">{onlineStatus ? "" : "👎🏻"}</li>
          <HeaderElement
            linkTo="/"
            svgElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 md:w-4 2xl:w-6 2xl:h-6 h-3 md:h-4 mt-1.5 md:mt-1 text-gray-700"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
              </svg>
            }
            headerText="Home"
            key="Home"
          />
          <HeaderElement
            linkTo="/about"
            svgElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 md:w-4 2xl:w-6 2xl:h-6 h-3 md:h-4 mt-1.5 md:mt-1 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            headerText="About"
            key="About"
          />
          <HeaderElement
            linkTo="/cart"
            svgElement={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-3 md:w-4 2xl:w-6 2xl:h-6 h-3 md:h-4 mt-1.5 md:mt-1 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
            headerText={
              <>
                Cart{" "}
                <sup className="text-sm md:text-md 2xl:text-lg">
                  ({cartItems.length})
                </sup>
              </>
            }
            key="Cart"
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
