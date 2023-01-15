import React from "react";

// styles
import "./Home.css";

// components
import Filters from "../../components/Filters/Filters";
import EmailList from "../../components/EmailList/EmailList";
import EmailBody from "../../components/EmailBody/EmailBody";

function Home() {
  return (
    <main className="app">
      <Filters />
      <div className="container">
        <div className="left">
          <EmailList />
        </div>
        <div className="right">
          <button className="inbox">&laquo; Inbox</button>
          <EmailBody />
        </div>
      </div>
    </main>
  );
}

export default Home;
