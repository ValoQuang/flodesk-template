import { useCallback, useState } from "react";
import "./Editor.css";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult } from "react-color";
import PageSetting from "../Settings/PageSetting";
import HeaderSetting from "../Settings/HeaderSetting";
import ParagraphSetting from "../Settings/ParagraphSetting";

const TemplateEditor = () => {
  const { template, updateTemplateSettings, currentEl } = useTemplateContext();

  const handleHeaderFontSize = (event: { target: { value: string } }) => {
    const newSize = event.target.value;
    if (newSize)
      updateTemplateSettings({
        property: "headingSettings",
        value: { ...template?.headingSettings, fontSize: `${newSize}px` },
      });
  };

  const handleHeaderColor = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({
        property: "headingSettings",
        value: { ...template?.headingSettings, color: color.hex },
      });
  };

  //    {/* Header setting*/}
  //    <section className="templateEditor-picker">
  //    <span>Font size</span>
  //    <input
  //      type="range"
  //      min="14"
  //      max="96"
  //      step="1"
  //      onChange={handleHeaderFontSize}
  //      value={parseInt(template?.headingSettings.fontSize!)}
  //    ></input>
  //  </section>
  //
  //   <section className="templateEditor-picker">
  //    <span>Font weight</span>
  //    <input
  //      type="range"
  //      min="0"
  //      max="100"
  //      step="5"
  //      onChange={handleContentWidth}
  //      value={parseInt(template?.contentWidth!)}
  //    ></input>
  //  </section>
  //
  //  <section className="templateEditor-picker">
  //    <span>Header color</span>
  //    <div
  //      style={{
  //        backgroundColor: template?.headingSettings.color,
  //        width: "35px",
  //        height: "35px",
  //        borderWidth: "1px",
  //      }}
  //      onClick={handleOpenPicker}
  //    ></div>
  //    {picker && (
  //      <SketchPicker
  //        className="templateEditor-sketch"
  //        color={template?.headingSettings.color}
  //        onChangeComplete={handleHeaderColor}
  //      />
  //    )}
  //  </section>
  //
  const renderSetting = useCallback(() => {
    if (!template) return null;

    switch (currentEl) {
      case "template" || null:
        return <PageSetting />;
      case "header":
        return <HeaderSetting />;
      case "paragraph":
        return <ParagraphSetting />;
      default:
        return <PageSetting />;
    }
  }, [currentEl]);

  return (
    <div className="templateEditor">
      <h3>{currentEl === null ? "template setting" : currentEl + ' setting'}</h3>
      {/* Template setting*/}
      <div className="templateEditor-board">
        {renderSetting()}
      </div>
    </div>
  );
};

export default TemplateEditor;
