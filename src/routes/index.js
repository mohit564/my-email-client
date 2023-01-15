//components
import Home from "../screens/Home/Home";
import Error from "../screens/Error/Error";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
];
