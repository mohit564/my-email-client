// styles
import "./App.css";

// components
import Filter from "./src/components/Filter/Filter";
import EmailList from "./src/components/EmailList/EmailList";
import EmailBody from "./src/components/EmailBody/EmailBody";

function App() {
  return (
    <div className="app">
      <Filter />
      <div className="container">
        <div className="left">
          <EmailList />
        </div>
        <div className="right">
          <button className="inbox">&laquo; Inbox</button>
          <EmailBody />
        </div>
      </div>
    </div>
  );
}

export default App;
