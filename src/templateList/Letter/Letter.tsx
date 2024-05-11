import React from "react";
import { ElementSettings, TemplateProps } from "../../types";

const TemplateLetter: React.FC<TemplateProps> = ({ templateDynamicVariables }) => {
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
  const letterContainerStyle: any = {
    width: "max-content",
    fontFamily:
      "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 20px 0px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
    overflow: "scroll",
    borderStyle: templateDynamicVariables.currentElementTag === "template" ? "solid" : "",
    borderWidth: templateDynamicVariables.currentElementTag === "template" ? "1.5px" : "",
    ...templateDynamicVariables.template,
  };

  const headerContainerStyle = {
    paddingTop: "20px",
    marginBottom: "20px",
  };

  const paragraphContainerStyle = {
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  return (
    <div style={letterContainerStyle}>
      <header style={headerContainerStyle}>
        {renderContent(
          templateDynamicVariables.header,
          templateDynamicVariables.header.content,
          "header"
        )}
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

export default TemplateLetter;
