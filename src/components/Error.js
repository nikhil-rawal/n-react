import { useRouteError } from "react-router-dom";

const Error = () => {
  const allErrors = useRouteError();
  console.log("Error Page", allErrors);
  return (
    <div>
      <h1>OOPS !!!</h1>
      <h2>Error page</h2>
      <h3>{allErrors.status}</h3>
    </div>
  );
};

export default Error;
