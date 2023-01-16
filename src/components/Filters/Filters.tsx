import React from "react";

// styles
import "./Filters.css";

function Filters() {
  return (
    <>
      <h1 className="label">Filter By:</h1>
      <button className="filter active">Unread</button>
      <button className="filter">Read</button>
      <button className="filter">Favorites</button>
    </>
  );
}

export default Filters;
