import React, { useCallback } from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import Letter from "../../templateList/Letter/Letter";
import Resume from "../../templateList/Resume/Resume";
import "./Preview.css";

const Preview = () => {
  const { template, setCurrentElement, currentElement } = useTemplateContext();

  const captureClickElement = useCallback(
    (event: any) => {
      setCurrentElement(event.target.id);
    },
    [setCurrentElement]
  );

  const renderTemplate = useCallback(() => {
    if (!template) return null;

    const templateStyle = {
      backgroundColor: template.backgroundColor || "white",
      width: template.contentWidth || "100%",
    };
    const headerStyle = {
      fontSize: template.headingSettings.fontSize || "16px",
      fontWeight: template.headingSettings.fontWeight || "normal",
      color: template.headingSettings.color || "black",
      content: template.headingSettings.content || "",
    };
    const paragraphStyle = {
      fontSize: template.paragraphSettings.fontSize || "14px",
      fontWeight: template.paragraphSettings.fontWeight || "normal",
      color: template.paragraphSettings.color || "black",
      content: template.paragraphSettings.content || "",
    };
    switch (template.id) {
      case "letter":
        return (
          <Letter
            templateStyle={templateStyle}
            headerStyle={headerStyle}
            paragraphStyle={paragraphStyle}
            template={template}
            currentElement={currentElement}
          />
        );
      case "resume":
        return (
          <Resume
            templateStyle={templateStyle}
            headerStyle={headerStyle}
            paragraphStyle={paragraphStyle}
            template={template}
            currentElement={currentElement}
          />
        );
      default:
        return null;
    }
  }, [template, currentElement]);

  return (
    <div
      className="preview"
      id="export-static-page"
      onClick={captureClickElement}
    >
      {renderTemplate()}
    </div>
  );
};

export default Preview;
