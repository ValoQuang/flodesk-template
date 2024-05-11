import { useCallback, useState } from "react";
import "./Editor.css";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult } from "react-color";
import PageSetting from "../Settings/PageSetting";
import HeaderSetting from "../Settings/HeaderSetting";
import ParagraphSetting from "../Settings/ParagraphSetting";

const TemplateEditor = () => {
  const { template, currentElement } = useTemplateContext();

  const renderSetting = useCallback(() => {
    if (!template) return null;

    switch (currentElement) {
      case "template" || null:
        return <PageSetting />;
      case "header":
        return <HeaderSetting />;
      case "paragraph":
        return <ParagraphSetting />;
      default:
        return <PageSetting />;
    }
  }, [currentElement]);

  return (
    <div className="templateEditor">
      <h3>
        {currentElement === null
          ? "template setting"
          : currentElement + " setting"}
      </h3>
      {/* Template setting*/}
      <div className="templateEditor-board">{renderSetting()}</div>
    </div>
  );
};

export default TemplateEditor;
