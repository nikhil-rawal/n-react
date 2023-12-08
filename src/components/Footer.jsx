import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-20 text-center">
      <span>&#169;2023, The Fork, CA, Inc. All rights reserved.</span>
      <br />
      <span>
        Made with ❤️ by{" "}
        <Link
          to="https://nikhil-rawal-portfolio.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Nikhil Rawal
        </Link>
      </span>
      <br />
      <br />
    </div>
  );
};

export default Footer;
