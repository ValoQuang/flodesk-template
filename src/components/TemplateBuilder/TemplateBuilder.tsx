import React from "react";
import Navbar from "../Navbar/Navbar";
import TemplateDisplay from "../TemplateDisplay/TemplateDisplay";
import TemplateEditor from "../TemplateEditor/TemplateEditor";
import "./TemplateBuilder.css";

const TemplateBuilder = () => {
  return (
    <div className="templateBuilder">
      <Navbar />

      <div className="templateBuilder-editor">
        <section className="templateBuilder-display">
          <TemplateDisplay />
        </section>
        <section className="templateBuilder-setting">
          <TemplateEditor />
        </section>
      </div>
    </div>
  );
};

export default TemplateBuilder;
