import { useCallback } from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import Letter from "../../templatesList/Letter";
import Resume from "../../templatesList/Resume";
import "./Preview.css";
import { ELEMENT_TAG, TEMPLATE_ID } from "../../enum";

const Preview = () => {
  const { exportRef, currentTemplate, setCurrentElementTag,currentElementTag } = useTemplateContext();

  const captureClickElement = useCallback(
    (event: any) => {
      const validIds = [
        ELEMENT_TAG.PAGE,
        ELEMENT_TAG.HEADER,
        ELEMENT_TAG.PARAGRAPH,
      ];
      const clickedId = event.target.id;
      if (validIds.includes(clickedId)) {
        setCurrentElementTag(clickedId);
      } else {
        setCurrentElementTag(ELEMENT_TAG.PAGE);
      }
    },
    [setCurrentElementTag]
  );

  const renderTemplate = useCallback(() => {
    if (!currentTemplate) return null;
    switch (currentTemplate.id) {
      case TEMPLATE_ID.LETTER:
        return <Letter currentElementTag={currentElementTag} currentTemplate={currentTemplate} />;
      case TEMPLATE_ID.RESUME:
        return <Resume currentElementTag={currentElementTag} currentTemplate={currentTemplate} />;
      default:
        return null;
    }
  }, [currentTemplate, currentElementTag]);

  return (
    <div
      className="preview"
      onClick={captureClickElement}
      ref={exportRef}
    >
      {renderTemplate()}
    </div>
  );
};

export default Preview;
