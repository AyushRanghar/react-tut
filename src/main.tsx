import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Pages/router-components/Layout";
import { Home, About, Contact, User, Github } from "./Pages/router-components";
import { githubInfoLoader } from "./Pages/router-components/constants";

import App from "./App";
import RandomTextGenerator from "./components/RandomTextGenerator";
import Currency from "./currency/Currency";
import BgChanger from "./components/BgChanger";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="layout" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userId" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
      <Route path="text-generator" element={<RandomTextGenerator />} />
      <Route path="bg-changer" element={<BgChanger />} />
      <Route path="currency" element={<Currency />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
