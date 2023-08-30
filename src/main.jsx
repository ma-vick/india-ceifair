import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home";
import Wedding from "./pages/Wedding/Wedding";
import CeiFair from "./pages/CeiFair/CeiFair";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'cei-fair',
        element: <CeiFair />,
      },
      {
        path: 'wedding',
        element: <Wedding />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
