import { useEffect } from "react";
import { useSelector } from "react-redux";
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
    path: "/profile",
    element: <User />,
  },
]);

const App = () => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      router.navigate("/profile");
    }
  }, [token]);

  return <RouterProvider router={router} />;
};

export default App;
