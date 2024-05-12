import React, { CSSProperties } from "react";
import { ElementSettings, TemplateProps } from "../types";
import { ELEMENT_TAG } from "../enum";

const TemplateResume: React.FC<TemplateProps> = ({ currentTemplate, currentElementTag }: TemplateProps) => {
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

  const resumeContainerStyle: CSSProperties = {
    textAlign: "center",
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
    borderStyle: currentElementTag === ELEMENT_TAG.PAGE ? "solid" : "",
    borderWidth: currentElementTag === ELEMENT_TAG.PAGE ? "1px" : "",
    maxWidth: currentTemplate.contentWidth,
    backgroundColor: currentTemplate.backgroundColor
  };

  const paragraphContainerStyle: CSSProperties = {
    lineHeight: "1.6",
    marginTop: "20px",
  };

  return (
    <div style={resumeContainerStyle}>
      <header>
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

export default TemplateResume;
