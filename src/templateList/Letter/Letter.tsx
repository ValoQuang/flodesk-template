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
      className="letter"
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
      id="template"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        height: "fit-content",
        ...templateStyle,
        overflow: "scroll",
      }}
    >
      <header>
        {renderContent(headerStyle, template.headingSettings.content, "header")}
      </header>

      <div>
        {renderContent(
          paragraphStyle,
          template.paragraphSettings.content,
          "paragraph"
        )}
      </div>
    </div>
  );
};

export default TemplateLetter;
