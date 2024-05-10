import { useState } from "react";
import "./Editor.css";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult, SketchPicker } from "react-color";

const TemplateEditor = () => {
  const { template, updateTemplateSettings, currentEl } = useTemplateContext();
  const [picker, setPicker] = useState(false);

  const handleOpenPicker = () => {
    setPicker(!picker);
  };

  const handleColorChange = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({ property: "backgroundColor", value: color.hex });
  };

  const handleContentWidth = (event: { target: { value: string; }; }) => {
    const newWidth = event.target.value
    if (newWidth) updateTemplateSettings({ property: "contentWidth", value: `${newWidth}%` });
  };

  const handleHeaderFontSize = (event: { target: { value: string; }; }) => {
    const newSize = event.target.value;
    if (newSize) updateTemplateSettings({ property: "headingSettings", value: { ...template?.headingSettings, fontSize: `${newSize}px` } });
  }

  const handleHeaderColor = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({ property: "headingSettings", value: { ...template?.headingSettings, color: color.hex} });
  };

  return (
    <div className="templateEditor">
      <h3>{currentEl}</h3>
      {/* Template setting*/}
      <div className="templateEditor-board">
        <h4>Template setting</h4>
        <section className="templateEditor-picker">
          <span>Color</span>
          <div
            style={{
              backgroundColor: template?.backgroundColor,
              width: "35px",
              height: "35px",
              borderWidth: "1px",
            }}
            onClick={handleOpenPicker}
          ></div>
          {picker && (
            <SketchPicker
              className="templateEditor-sketch"
              color={template?.backgroundColor}
              onChangeComplete={handleColorChange}
            />
          )}
        </section>

        <section className="templateEditor-picker">
          <span>Page width</span>
          {parseInt(template?.contentWidth!)}
          <input
            type="range"
            min="10"
            max="100"
            onChange={handleContentWidth}
            value={parseInt(template?.contentWidth!)}
          ></input>
        </section>

    {/* Header setting*/}
        <section className="templateEditor-picker">
          <span>Font size</span>
          <input
            type="range"
            min="14"
            max="96"
            step="1"
            onChange={handleHeaderFontSize}
            value={parseInt(template?.headingSettings.fontSize!)}
          ></input>
        </section>

         <section className="templateEditor-picker">
          <span>Font weight</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            onChange={handleContentWidth}
            value={parseInt(template?.contentWidth!)}
          ></input>
        </section>

        <section className="templateEditor-picker">
          <span>Header color</span>
          <div
            style={{
              backgroundColor: template?.headingSettings.color,
              width: "35px",
              height: "35px",
              borderWidth: "1px",
            }}
            onClick={handleOpenPicker}
          ></div>
          {picker && (
            <SketchPicker
              className="templateEditor-sketch"
              color={template?.headingSettings.color}
              onChangeComplete={handleHeaderColor}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default TemplateEditor;
