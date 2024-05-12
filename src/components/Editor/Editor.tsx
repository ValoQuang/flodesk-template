import { useCallback } from "react";
import "./Editor.css";
import { useTemplateContext } from "../../AppContextProvider";
import PageSetting from "../Settings/PageSetting";
import HeaderSetting from "../Settings/HeaderSetting";
import ParagraphSetting from "../Settings/ParagraphSetting";
import { ELEMENT_TAG } from "../../enum";

const TemplateEditor = () => {
  const { currentTemplate, currentElementTag } = useTemplateContext();

  const renderSetting = useCallback(() => {
    if (!currentTemplate) return null;

    switch (currentElementTag) {
      case ELEMENT_TAG.PAGE || null:
        return <PageSetting />;
      case ELEMENT_TAG.HEADER:
        return <HeaderSetting />;
      case ELEMENT_TAG.PARAGRAPH:
        return <ParagraphSetting />;
      default:
        return <PageSetting />;
    }
  }, [currentTemplate, currentElementTag]);

  return (
    <div className="templateEditor">
      <h3>{currentElementTag === null ? ELEMENT_TAG.PAGE : currentElementTag + " setting"}</h3>
      {/* Template setting*/}
      <div>{renderSetting()}</div>
    </div>
  );
};

export default TemplateEditor;
