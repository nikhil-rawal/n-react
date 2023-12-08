import { useRouteError } from "react-router-dom";

const Error = () => {
  const allErrors = useRouteError();
  return (
    <div className="text-[#888] table w-full h-full text-center align-middle">
      <h1 className="inline-block text-9xl">Error 404</h1>
      <h3 className="text-4xl">Page Not Found</h3>
      <h2 className="text-6xl">Please RELOAD</h2>
      <h3 className="text-3xl">{allErrors.status}</h3>
    </div>
  );
};

export default Error;
