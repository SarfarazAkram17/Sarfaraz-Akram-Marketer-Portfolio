import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layout/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
// Projects are paused for now. To bring back case-study pages, uncomment this
// import and the route below, plus the Projects tab in Showcase.jsx.
// import ProjectDetails from "./Components/ProjectDetails/ProjectDetails.jsx";
import HomeLayout from "./Layout/HomeLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      // {
      //   path: "/project/:projectName",
      //   Component: ProjectDetails,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
