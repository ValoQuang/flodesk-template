import { MouseEvent, useCallback } from "react";
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
      backgroundColor: template.backgroundColor,
      width: template.contentWidth,
    };
    const headerStyle = {
      fontSize: template.headingSettings.fontSize,
      fontWeight: template.headingSettings.fontWeight,
      color: template.headingSettings.color,
      content: template.headingSettings.content,
    };
    const paragraphStyle = {
      fontSize: template.paragraphSettings.fontSize,
      fontWeight: template.paragraphSettings.fontWeight,
      color: template.paragraphSettings.color,
      content: template.paragraphSettings.content,
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
