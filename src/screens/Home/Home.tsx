import React from "react";
import { useSelector } from "react-redux";

// styles
import "./Home.css";

// types
import type { RootState } from "../../redux/store";

// components
import Filters from "../../components/Filters/Filters";
import EmailList from "../../components/EmailList/EmailList";
import EmailBody from "../../components/EmailBody/EmailBody";

function Home() {
  const { selectedEmail } = useSelector((state: RootState) => state.email);
  return (
    <main className="app">
      <section
        className={`filters ${selectedEmail != null ? "email-open" : ""}`}
      >
        <Filters />
      </section>
      <div className="container">
        <div className={`left ${selectedEmail != null ? "email-open" : ""}`}>
          <EmailList />
        </div>
        {selectedEmail != null && (
          <div className="right">
            <button className="inbox">&laquo; Inbox</button>
            <EmailBody {...selectedEmail} />
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
