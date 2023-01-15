import React from "react";
import { RouterProvider } from "react-router-dom";

// styles
import "./App.css";

// router
import { router } from "./src/routes/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
