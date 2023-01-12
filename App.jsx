import "./App.css";

import Filter from "./src/components/Filter/Filter";
import EmailList from "./src/components/EmailList/EmailList";

function App() {
  return (
    <div className="app">
      <Filter />
      <EmailList />
    </div>
  );
}

export default App;
