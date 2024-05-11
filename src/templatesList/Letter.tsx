import React, { CSSProperties } from "react";
import { ElementSettings, TemplateProps } from "../types";
import { ELEMENT_TAG } from "../enum";

const TemplateLetter: React.FC<TemplateProps> = ({
  templateDynamicVariables,
}) => {
  const renderContent = (
    style: React.CSSProperties | ElementSettings | undefined,
    content: string,
    id: string
  ) => (
    <div
      id={id}
      style={{
        borderStyle:
          templateDynamicVariables.currentElementTag === id ? "solid" : "",
        borderWidth:
          templateDynamicVariables.currentElementTag === id ? "1px" : "",
        ...style,
      }}
    >
      {content}
    </div>
  );
  const letterContainerStyle: CSSProperties = {
    width: "max-content",
    fontFamily:
      "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: "0px 20px 0px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: "90vh",
    overflow: "scroll",
    borderStyle:
      templateDynamicVariables.currentElementTag === ELEMENT_TAG.PAGE
        ? "solid"
        : "",
    borderWidth:
      templateDynamicVariables.currentElementTag === ELEMENT_TAG.PAGE
        ? "1.5px"
        : "",
    ...templateDynamicVariables.currentTemplate,
  };

  const headerContainerStyle: CSSProperties = {
    paddingTop: "20px",
    marginBottom: "20px",
  };

  const paragraphContainerStyle: CSSProperties = {
    lineHeight: "1.6",
    marginTop: "40px",
  };

  return (
    <div style={letterContainerStyle}>
      <header style={headerContainerStyle}>
        {renderContent(
          templateDynamicVariables.header,
          templateDynamicVariables.header.content,
          ELEMENT_TAG.HEADER
        )}
      </header>
      <p style={paragraphContainerStyle}>
        {renderContent(
          templateDynamicVariables.paragraph,
          templateDynamicVariables.paragraph.content,
          ELEMENT_TAG.PARAGRAPH
        )}
      </p>
    </div>
  );
};

export default TemplateLetter;
