import React, { CSSProperties } from "react";
import { ElementSettings, Template, TemplateProps } from "../types";
import { ELEMENT_TAG } from "../enum";

const TemplateLetter: React.FC<TemplateProps> = ({ currentTemplate, currentElementTag }: TemplateProps) => {
  const renderContent = (
    style: React.CSSProperties | ElementSettings,
    content: string,
    id: string
  ) => (
    <div
      id={id}
      style={{
        borderStyle: currentElementTag === id ? "solid" : "",
        borderWidth: currentElementTag === id ? "1px" : "",
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
    borderStyle: currentElementTag === ELEMENT_TAG.PAGE ? "solid" : "",
    borderWidth: currentElementTag === ELEMENT_TAG.PAGE ? "1.5px" : "",
    maxWidth: currentTemplate.contentWidth,
    backgroundColor: currentTemplate.backgroundColor
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
          currentTemplate.headerSettings,
          currentTemplate.headerSettings.content,
          ELEMENT_TAG.HEADER
        )}
      </header>
      <p style={paragraphContainerStyle}>
        {renderContent(
          currentTemplate.paragraphSettings,
          currentTemplate.paragraphSettings.content,
          ELEMENT_TAG.PARAGRAPH
        )}
      </p>
    </div>
  );
};

export default TemplateLetter;
