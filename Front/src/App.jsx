import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
