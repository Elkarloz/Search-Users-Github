import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardUsers from "./CardUsers";
import SearchUsers from "./SearchUsers";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App">
      <MyNavbar />
      <div className="col-md-12 row">
        <div className="col-md-5">
          <CardUsers />
        </div>
        <div className="col-md-7">
          <SearchUsers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
