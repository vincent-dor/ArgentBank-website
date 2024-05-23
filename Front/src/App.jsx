import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Index";
import Login from "./pages/Login/Index";
import User from "./pages/User/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
