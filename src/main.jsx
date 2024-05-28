import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { EventProvider } from "./contexts/EventContext.jsx";

import App from "./App.jsx";
import Calendar from "./pages/Calendar.jsx";
import Favory from "./pages/Favory.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Calendar />
      </App>
    ),
    loader: async () => {
      const events = await axios.get(
        "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-nantes-metropole/records?limit=20"
      );
      return events.data;
    },
  },
  {
    path: "/favoris",
    element: (
      <App>
        <Favory />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventProvider>
      <RouterProvider router={router} />
    </EventProvider>
  </React.StrictMode>
);
