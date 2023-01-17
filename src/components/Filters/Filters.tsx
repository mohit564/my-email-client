import React, { useState, useEffect } from "react";

// styles
import "./Filters.css";

// types
import type { EmailFilterTypes } from "../../models/filter";

// hooks
import { useAppDispatch } from "../../redux/store";

// actions
import { getEmailsByFilter } from "../../redux/slices/emailSlice";

function Filters() {
  const dispatch = useAppDispatch();

  // local states
  const [filter, setFilter] = useState<EmailFilterTypes>("ALL");

  // life cycle methods
  useEffect(() => {
    dispatch(getEmailsByFilter(filter));
  }, [filter]);

  return (
    <>
      <h1 className="label">Filter By:</h1>
      <button
        className={`filter ${filter === "UNREAD" ? "active" : ""}`}
        onClick={() =>
          setFilter((prev) => (prev !== "UNREAD" ? "UNREAD" : "ALL"))
        }
      >
        Unread
      </button>
      <button
        className={`filter ${filter === "READ" ? "active" : ""}`}
        onClick={() => setFilter((prev) => (prev !== "READ" ? "READ" : "ALL"))}
      >
        Read
      </button>
      <button
        className={`filter ${filter === "FAVORITE" ? "active" : ""}`}
        onClick={() =>
          setFilter((prev) => (prev !== "FAVORITE" ? "FAVORITE" : "ALL"))
        }
      >
        Favorites
      </button>
    </>
  );
}

export default Filters;
