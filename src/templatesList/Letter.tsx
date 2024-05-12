import React, { CSSProperties } from "react";
import { TemplateProps } from "../types";
import TemplateGenerator from "./TemplateGenerator";

const TemplateLetter: React.FC<TemplateProps> = ({ currentTemplate, currentElementTag }: TemplateProps) => {
  //CSS prop for each specific layout
  const layoutProperties: CSSProperties = {
    width: "max-content",
    fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "50px 30px 5px 30px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
    overflow: "scroll",
    gap: "30px"
  };

  return (
    <TemplateGenerator
      layoutProperties={layoutProperties}
      currentTemplate={currentTemplate}
      currentElementTag={currentElementTag}
    />
  );
};

export default TemplateLetter;
