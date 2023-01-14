import React from "react";

// styles
import "./Filters.css";

function Filters() {
  return (
    <section className="filters">
      <p className="label">Filter By:</p>
      <button className="filter active">Unread</button>
      <button className="filter">Read</button>
      <button className="filter">Favorites</button>
    </section>
  );
}

export default Filters;
