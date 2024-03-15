import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import ErrorPage from "./Error-page";
import Contact from "./Contact-page";
import { Contactloader, getContactloader } from "./Loaders/ContactLoader";
import {
  CrateContactaction,
  EditContactAction,
} from "./Actions/ContactActions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditContact from "./Editcontact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Contactloader,
    action: CrateContactaction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: getContactloader,
        errorElement: <ErrorPage />,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactloader,
        action: EditContactAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
