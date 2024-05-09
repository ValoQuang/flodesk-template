import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleBackToTemplateSelector = () => {};

  const handleExportStaticPage = () => {};

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3>Template</h3>
        <section>
          {" "}
          <button className="navbar-button">Back</button>
          <button className="navbar-button">Export</button>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
