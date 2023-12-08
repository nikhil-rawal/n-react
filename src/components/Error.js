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

<div
  class="fof"
  style="
          color: #888;
          display: table;
          width: 100%;
          height: 100vh;
          text-align: center;
          vertical-align: middle;
        "
>
  <h1 style="font-size: 100px; display: inline-block; padding-right: 12px">
    Error 404
  </h1>
  <h3 style="font-size: 40px">Page Not Found</h3>
  <h2 style="font-size: 65px">Please RELOAD</h2>
</div>;
