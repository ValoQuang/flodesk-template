import React, { CSSProperties } from "react";
import { ElementSettings, TemplateProps } from "../types";
import { ELEMENT_TAG } from "../enum";

const TemplateGenerator: React.FC<TemplateProps> = ({ layoutProperties, currentTemplate, currentElementTag }: TemplateProps) => {
  const renderContent = (
    style: React.CSSProperties | ElementSettings,
    content: string,
    id: string
  ) => (
    <div
      id={id}
      style={{
        borderStyle: currentElementTag === id ? "dotted" : "",
        borderWidth: currentElementTag === id ? "1px" : "",
        ...style,
      }}
    >
      {content}
    </div>
  );

  const templateContainerStyle: CSSProperties = {
    ...layoutProperties,
    //Dynamic prop below this comment
    borderStyle: currentElementTag === ELEMENT_TAG.PAGE ? "dotted" : "",
    borderWidth: currentElementTag === ELEMENT_TAG.PAGE ? "1px" : "",
    maxWidth: currentTemplate.contentWidth,
    backgroundColor: currentTemplate.backgroundColor
  };

  return (
    <div style={templateContainerStyle}>
      <header>
        {renderContent(
          currentTemplate.headerSettings,
          currentTemplate.headerSettings.content,
          ELEMENT_TAG.HEADER
        )}
      </header>
      <p>
        {renderContent(
          currentTemplate.paragraphSettings,
          currentTemplate.paragraphSettings.content,
          ELEMENT_TAG.PARAGRAPH
        )}
      </p>
    </div>
  );
};

export default TemplateGenerator;
