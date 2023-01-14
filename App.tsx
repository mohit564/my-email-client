import React from "react";

// styles
import "./App.css";

// components
import Filters from "./src/components/Filters/Filters";
import EmailList from "./src/components/EmailList/EmailList";
import EmailBody from "./src/components/EmailBody/EmailBody";

function App() {
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

export default App;
