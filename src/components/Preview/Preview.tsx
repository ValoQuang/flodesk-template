import { useCallback } from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import Letter from "../../templatesList/Letter";
import Resume from "../../templatesList/Resume";
import "./Preview.css";
import { ELEMENT_TAG } from "../../enum";

const Preview = () => {
  const { currentTemplate, setCurrentElement, currentElementTag } =
    useTemplateContext();

  const captureClickElement = useCallback(
    (event: any) => {
      const validIds = [
        ELEMENT_TAG.PAGE,
        ELEMENT_TAG.HEADER,
        ELEMENT_TAG.PARAGRAPH,
      ];
      const clickedId = event.target.id;
      if (validIds.includes(clickedId)) {
        setCurrentElement(clickedId);
      } else {
        setCurrentElement(ELEMENT_TAG.PAGE);
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
        fontSize: currentTemplate.headerSettings.fontSize,
        fontWeight: currentTemplate.headerSettings.fontWeight,
        color: currentTemplate.headerSettings.color,
        content: currentTemplate.headerSettings.content,
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
