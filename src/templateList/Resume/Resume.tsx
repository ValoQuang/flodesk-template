import React from "react";
import { ElementSettings, TemplateProps } from "../../types";

const TemplateResume: React.FC<TemplateProps> = ({ templateDynamicVariables }) => {
  const renderContent = (
    style: React.CSSProperties | ElementSettings | undefined,
    content: string,
    id: string
  ) => (
    <div
      id={id}
      style={{
        borderStyle: templateDynamicVariables.currentElementTag === id ? "solid" : "",
        borderWidth: templateDynamicVariables.currentElementTag === id ? "1px" : "",
        ...style,
      }}
    >
      {content}
    </div>
  );
  const resumeContainerStyle = {
    display: "flex",
    fontFamily:
      "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    gap: "30px",
    width: "max-content",
    padding: "50px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
    overflow: "scroll",
    backgroundColor: "red",
    borderStyle: templateDynamicVariables.currentElementTag === "template" ? "solid" : "",
    borderWidth: templateDynamicVariables.currentElementTag === "template" ? "1px" : "",
    ...templateDynamicVariables.template,
  };

  const paragraphContainerStyle = {
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  return (
    <div style={resumeContainerStyle}>
      <header>
        {renderContent(templateDynamicVariables.header, templateDynamicVariables.header.content, "header")}
      </header>
      <p style={paragraphContainerStyle}>
        {renderContent(
          templateDynamicVariables.paragraph,
          templateDynamicVariables.paragraph.content,
          "paragraph"
        )}
      </p>
    </div>
  );
};

export default TemplateResume;
