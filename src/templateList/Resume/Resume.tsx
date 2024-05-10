import React from "react";
import "./Resume.css";
import { Template, ElementSettings } from "../../types";

interface LetterProps {
  templateStyle: React.CSSProperties;
  headerStyle: ElementSettings;
  paragraphStyle: ElementSettings;
  template: Template;
  currentEl: string | null;
}

const TemplateResume: React.FC<LetterProps> = ({
  templateStyle,
  headerStyle,
  paragraphStyle,
  template,
  currentEl,
}) => {
  const renderContent = (style: any, content: string, id: string) => (
    <div
      className="letter"
      id={id}
      style={{
        borderStyle: currentEl === id ? "solid" : "",
        borderWidth: currentEl === id ? "1px" : "",
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
        ...templateStyle,
      }}
    >
      {renderContent(headerStyle, template.headingSettings.content, "header")}

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

export default TemplateResume;
