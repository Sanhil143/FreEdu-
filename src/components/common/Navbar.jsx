import React from "react";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "75px",
        display: "flex",
        backgroundColor: "#1C1E53",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "100px",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              cursor: "pointer",
              color: "#ffffff",
            }}
          >
            freeDU
          </h2>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              marginLeft: "300px",
            }}
          >
            <li className="navListStyle">HOME</li>
            <li className="navListStyle">ABOUTUS</li>
            <li className="navListStyle">COURSE</li>
            <li className="navListStyle">FAQs</li>
            <li className="navListStyle">BLOGS</li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            height: "37px",
            width: "100px",
            marginRight: "100px",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          <Link
            to="/auth"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            JOIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
