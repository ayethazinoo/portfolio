import React from "react";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skill",
          element: <Skill />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;  
};

export default App;
