import React from "react";
import "./Letter.css";
import { ElementSettings, TemplateProps } from "../../types";

const TemplateLetter: React.FC<TemplateProps> = ({
  templateStyle,
  headerStyle,
  paragraphStyle,
  template,
  currentElement,
}) => {
  const renderContent = (style: React.CSSProperties | ElementSettings | undefined, content: string, id: string) => (
    <div
      id={id}
      style={{
        borderStyle: currentElement === id ? "solid" : "",
        borderWidth: currentElement === id ? "1px" : "",
        ...style,
      }}
    >
      {content}
    </div>
  );

  return (
    <div
      className="letter-container"
      id="template"
      style={{
        borderStyle: currentElement === "template" ? "solid" : "",
        borderWidth: currentElement === "template" ? "1.5px" : "",
        ...templateStyle,
      }}
    >
      <header >
        {renderContent(headerStyle, template.headingSettings.content, "header")}
      </header>

      <p style={{paddingTop:"100px"}}>
        {renderContent(
          paragraphStyle,
          template.paragraphSettings.content,
          "paragraph"
        )}
      </p>
    </div>
  );
};

export default TemplateLetter;
