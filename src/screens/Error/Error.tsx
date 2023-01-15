import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Error.css";

function Error() {
  return (
    <section className="error-screen">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The Page you are looking for doesn't exist or an other error occured. Go
        to{" "}
      </p>
      <Link to="/">Home</Link>
    </section>
  );
}

export default Error;
