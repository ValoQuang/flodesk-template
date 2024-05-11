import { useCallback } from "react";
import "./Editor.css";
import { useTemplateContext } from "../../AppContextProvider";
import PageSetting from "../Settings/PageSetting";
import HeaderSetting from "../Settings/HeaderSetting";
import ParagraphSetting from "../Settings/ParagraphSetting";

const TemplateEditor = () => {
  const { template, currentElementTag } = useTemplateContext();

  const renderSetting = useCallback(() => {
    if (!template) return null;

    switch (currentElementTag) {
      case "template" || null:
        return <PageSetting />;
      case "header":
        return <HeaderSetting />;
      case "paragraph":
        return <ParagraphSetting />;
      default:
        return <PageSetting />;
    }
  }, [template, currentElementTag]);

  return (
    <div className="templateEditor">
      <h3>{currentElementTag + " setting"}</h3>
      {/* Template setting*/}
      <div>{renderSetting()}</div>
    </div>
  );
};

export default TemplateEditor;
