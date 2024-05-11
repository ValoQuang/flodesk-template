import { useCallback } from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import Letter from "../../templateList/Letter/Letter";
import Resume from "../../templateList/Resume/Resume";
import "./Preview.css";

const Preview = () => {
  const { template, setCurrentElement, currentElementTag } =
    useTemplateContext();

  const captureClickElement = useCallback(
    (event: any) => {
      setCurrentElement(event.target.id);
    },
    [setCurrentElement]
  );

  const renderTemplate = useCallback(() => {
    if (!template) return null;

    const templateDynamicVariables = {
      currentElementTag: currentElementTag,
      template: {
        backgroundColor: template.backgroundColor,
        width: template.contentWidth,
      },
      header: {
        fontSize: template.headingSettings.fontSize,
        fontWeight: template.headingSettings.fontWeight,
        color: template.headingSettings.color,
        content: template.headingSettings.content,
      },
      paragraph: {
        fontSize: template.paragraphSettings.fontSize,
        fontWeight: template.paragraphSettings.fontWeight,
        color: template.paragraphSettings.color,
        content: template.paragraphSettings.content,
      },
    };

    switch (template.id) {
      case "letter":
        return (
          <Letter
            templateDynamicVariables={templateDynamicVariables}
          />
        );
      case "resume":
        return (
          <Resume
            templateDynamicVariables={templateDynamicVariables}
          />
        );
      default:
        return null;
    }
  }, [template, currentElementTag]);

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
