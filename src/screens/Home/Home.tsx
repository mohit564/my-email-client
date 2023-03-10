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
  const { openedEmail } = useSelector((state: RootState) => state.email);
  return (
    <main className="app">
      <Filters />
      <div className="container">
        <div className={`left ${openedEmail != null ? "email-open" : ""}`}>
          <EmailList />
        </div>
        {openedEmail != null && (
          <div className="right">
            <EmailBody {...openedEmail} />
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
