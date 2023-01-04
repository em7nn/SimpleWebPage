import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
  ])

  export default router