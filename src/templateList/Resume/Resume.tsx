import React from "react";
import "./Resume.css";
import { ElementSettings, TemplateProps } from "../../types";

const TemplateResume: React.FC<TemplateProps> = ({
  templateStyle,
  headerStyle,
  paragraphStyle,
  template,
  currentElement,
}) => {
  const renderContent = (
    style: React.CSSProperties | ElementSettings | undefined,
    content: string,
    id: string
  ) => (
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
      className="resume-container"
      id="template"
      style={{
        borderStyle: currentElement === "template" ? "solid" : "",
        borderWidth: currentElement === "template" ? "1px" : "",
        ...templateStyle,
      }}
    >
      <header>
        {renderContent(headerStyle, template.headingSettings.content, "header")}
      </header>

      <p>
        {renderContent(
          paragraphStyle,
          template.paragraphSettings.content,
          "paragraph"
        )}
      </p>
    </div>
  );
};

export default TemplateResume;
