import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "#212529",
          width: "100%",
          height: "80px",
          position: "absolute",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          paddingTop: "10px",
        }}
      >
        <div className="row" style={{ height: 0 }}>
          <ul
            style={{ listStyle: "none", height: 0, left: 10, top: 30 }}
            className="col-md-1"
          ></ul>
          <ul
            style={{ listStyle: "none", height: 0, left: 10 }}
            className="col-md-3"
          >
            <li>
              <h5 style={{ color: "#fff", height: 20, fontSize: 15 }}>
                Información
              </h5>
            </li>
            <li>
              <p
                style={{
                  color: "#fff",
                  height: 20,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Copyright © 2022 Search Users Github{" "}
              </p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
