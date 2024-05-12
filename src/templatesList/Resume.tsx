import React, { CSSProperties } from "react";
import { TemplateProps } from "../types";
import TemplateGenerator from "./TemplateGenerator";

const TemplateResume: React.FC<TemplateProps> = ({ currentTemplate, currentElementTag }: TemplateProps) => {
   //CSS prop for each specific layout
  const layoutProperties = {
    textAlign: "center",
    display: "flex",
    fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    gap: "30px",
    width: "max-content",
    padding: "50px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
    overflow: "scroll",
  } as CSSProperties;

  return (
    <TemplateGenerator
      layoutProperties={layoutProperties}
      currentTemplate={currentTemplate}
      currentElementTag={currentElementTag}
    />
  );
};

export default TemplateResume;
