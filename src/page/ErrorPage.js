import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 px-3">
      <h1 className="font-extrabold text-5xl tracking-wider text-red-500">
        404
      </h1>
      <p className="font-semibold text-xl text-center">
        Sorry, the page you tried cannot be found
      </p>
      <button
        type="button"
        className="bg-neutral-500 px-3 text-neutral-100 font-medium tracking-wider rounded-md py-1"
      >
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
