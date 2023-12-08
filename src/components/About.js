import { Link } from "react-router-dom";

const About = () => {
  const AboutCard = ({
    technologyName,
    version,
    aboutTechnology,
    hashtag1,
    hashtag2,
    hashtag3,
  }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-md border-b m-4">
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2">
            {technologyName}
            <sub className="font-light text-sm"> v{version}</sub>
          </div>
          <p className="text-gray-700 text-base">{aboutTechnology}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{hashtag1}
          </span>
          {hashtag2 && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{hashtag2}
            </span>
          )}
          {hashtag3 && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{hashtag3}
            </span>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="m-14 mb-28 text-center">
      <h1 className="text-3xl">
        Welcome to{" "}
        <Link to="/">
          <strong className="cursor-pointer">The Fork</strong>
        </Link>
      </h1>
      <br />
      <h2 className="text-xl">
        A food delivery app / project made in React JS using India's leading
        food delivery application -{" "}
        <Link to="https://www.swiggy.com/">
          <text className="text-orange-400 cursor-pointer">Swiggy</text>
        </Link>{" "}
        API.
      </h2>
      <br />
      <hr />
      <br />
      <div>
        <p className="text-xl">Technologies used in project</p>
        <br />
        <div className="flex flex-row flex-wrap justify-center">
          <AboutCard
            technologyName="ReactJS"
            version="18.2.0"
            aboutTechnology="A frontend Javascript library used to build reusable interfaces and components."
            hashtag1="reactjs"
            hashtag2="reusable-components"
            hashtag3="frontend"
          />
          <AboutCard
            technologyName="JavaScript"
            version="ECMAScript 2023"
            aboutTechnology="Main scripting side language of the project. Base for ReactJS"
            hashtag1="API"
            hashtag2="async-await"
            hashtag3="high-order-components"
          />
          <AboutCard
            technologyName="Redux"
            version="8.1.3"
            aboutTechnology="Made sure that app behave consistently across client, server, and native environments, and are easy to test. Also updated cart using redux"
            hashtag1="store"
            hashtag2="cartdata"
            hashtag3="actions"
          />
          <AboutCard
            technologyName="React-Router-DOM"
            version="6.16.0"
            aboutTechnology="Implemented component based dynamic web routing"
            hashtag1="dynamic-routing"
          />
          <AboutCard
            technologyName="React-Multi-Carousel"
            version="2.8.4"
            aboutTechnology="Used in rendering of carousel for dishes"
            hashtag1="slideshow"
            hashtag2="prev-next-buttons"
            hashtag3="cycle"
          />
          <AboutCard
            technologyName="Tailwind CSS"
            version="3.3.3"
            aboutTechnology="Open Source CSS framework"
            hashtag1="css-classes"
            hashtag2="design-system"
            hashtag3="components"
          />
          <AboutCard
            technologyName="Parcel"
            version="2.9.3"
            aboutTechnology="Building/compiling tool for react apps"
            hashtag1="zero-config"
            hashtag2="debugging"
            hashtag3="production-ready"
          />
          <AboutCard
            technologyName="Jest"
            version="29.7.0"
            aboutTechnology="Javascript testing framewrok"
            hashtag1="testing"
            hashtag2="validation-tool"
          />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <p className="text-2xl">About the Author</p>
        <h1 className="font-bold text-4xl m-4">Nikhil Rawal</h1>
        <p>
          A UI designer and an experienced React JS frontend developer with
          ability to work MERN Stack and Next JS
        </p>
        <br />
        <span>Connect with me</span>
        <div className="flex flex-row justify-center">
          <Link
            to="https://github.com/nikhil-rawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="m-4"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            to="https://www.linkedin.com/in/nikhil-rawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className="m-4"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
