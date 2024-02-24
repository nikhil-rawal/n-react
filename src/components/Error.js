import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const allErrors = useRouteError();
  return (
    <div className="text-[#888] table w-full h-full text-center align-middle">
      <h1 className="inline-block text-8xl">Error 404</h1>
      <h3 className="text-4xl">Page Not Found</h3>
      <h2 className="text-6xl">Please RELOAD</h2>
      <h3 className="text-3xl">{allErrors.status}</h3>
      <br />
      <hr />
      <br />
      <h2 className="inline-block text-7xl">Return to</h2>
      <br />
      <Link to="/">
        <span className="text-6xl px-6">👉🏻</span>&nbsp;
        <h1 className="text-[#414141] inline-block text-9xl">The Fork</h1>
        &nbsp;<span className="text-6xl px-6">👈🏻</span>
      </Link>
    </div>
  );
};

export default Error;
