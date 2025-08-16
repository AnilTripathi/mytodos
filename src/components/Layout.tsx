import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container h-100 py-4">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-11">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
