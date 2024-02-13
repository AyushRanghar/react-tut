import React from "react";
import Header from "./Router/router-components/header/Header";
import Footer from "./Router/router-components/footer/Footer";
import { Outlet } from "react-router-dom";

const Router = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  );
};

export default Router;
