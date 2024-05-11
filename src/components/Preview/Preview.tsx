import { useCallback } from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import Letter from "../../templatesList/Letter/Letter";
import Resume from "../../templatesList/Resume/Resume";
import "./Preview.css";

const Preview = () => {
  const { currentTemplate, setCurrentElement, currentElementTag } =
    useTemplateContext();

  const captureClickElement = useCallback(
    (event: any) => {
      const validIds = ["page", "header", "paragraph"];
      const clickedId = event.target.id;

      if (validIds.includes(clickedId)) {
        setCurrentElement(clickedId);
      } else {
        setCurrentElement("page");
      }
    },
    [setCurrentElement]
  );

  const renderTemplate = useCallback(() => {
    if (!currentTemplate) return null;

    const templateDynamicVariables = {
      currentElementTag: currentElementTag,
      currentTemplate: {
        backgroundColor: currentTemplate.backgroundColor,
        width: currentTemplate.contentWidth,
      },
      header: {
        fontSize: currentTemplate.headingSettings.fontSize,
        fontWeight: currentTemplate.headingSettings.fontWeight,
        color: currentTemplate.headingSettings.color,
        content: currentTemplate.headingSettings.content,
      },
      paragraph: {
        fontSize: currentTemplate.paragraphSettings.fontSize,
        fontWeight: currentTemplate.paragraphSettings.fontWeight,
        color: currentTemplate.paragraphSettings.color,
        content: currentTemplate.paragraphSettings.content,
      },
    };

    switch (currentTemplate.id) {
      case "letter":
        return <Letter templateDynamicVariables={templateDynamicVariables} />;
      case "resume":
        return <Resume templateDynamicVariables={templateDynamicVariables} />;
      default:
        return null;
    }
  }, [currentTemplate, currentElementTag]);

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
