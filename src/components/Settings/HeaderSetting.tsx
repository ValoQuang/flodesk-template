import { useState } from "react";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult, SketchPicker } from "react-color";
import "./Setting.css";
import { fontWeightOption } from "../../mockData";
import { ElementSettings } from "../../types";

const HeaderSetting = () => {
  const { currentTemplate, updateTemplateSettings } = useTemplateContext();
  const [picker, setPicker] = useState<boolean>(false);

  const handleOpenPicker = () => {
    setPicker(!picker);
  };

  const handleHeaderFontSize = (event: { target: { value: string } }) => {
    const newSize = event.target.value;
    if (newSize)
      updateTemplateSettings({
        property: "headingSettings",
        value: {
          ...currentTemplate?.headingSettings,
          fontSize: `${newSize}px`,
        } as ElementSettings,
      });
  };

  const handleHeaderFontWeight = (newWeight: string) => {
    if (newWeight)
      updateTemplateSettings({
        property: "headingSettings",
        value: {
          ...currentTemplate?.headingSettings,
          fontWeight: newWeight,
        } as ElementSettings,
      });
  };

  const handleHeaderContent = (content: { target: { value: string } }) => {
    const newHeadline = content.target.value;
    if (newHeadline)
      updateTemplateSettings({
        property: "headingSettings",
        value: {
          ...currentTemplate?.headingSettings,
          content: newHeadline,
        } as ElementSettings,
      });
  };

  const handleHeaderColor = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({
        property: "headingSettings",
        value: {
          ...currentTemplate?.headingSettings,
          color: color.hex,
        } as ElementSettings,
      });
  };

  return (
    <div>
      <section className="page-setting-picker">
        <span>Header Color</span>
        <div
          style={{
            backgroundColor: currentTemplate?.headingSettings.color,
            width: "35px",
            height: "35px",
            borderWidth: "1px",
          }}
          onClick={handleOpenPicker}
        ></div>
        {picker && (
          <SketchPicker
            className="templateEditor-sketch"
            color={currentTemplate?.headingSettings.color}
            onChangeComplete={handleHeaderColor}
          />
        )}
      </section>

      <section className="page-setting-picker">
        <span>Font size</span>
        <input
          type="range"
          min="14"
          max="96"
          step="1"
          onChange={handleHeaderFontSize}
          value={parseInt(currentTemplate?.headingSettings.fontSize!)}
        ></input>
      </section>

      <section className="page-setting-picker">
        <span>Font weight</span>
        {fontWeightOption.map((fontWeightValue) => (
          <div key={fontWeightValue}>
            <input
              checked={
                currentTemplate?.headingSettings.fontWeight === fontWeightValue
              }
              type="radio"
              id={fontWeightValue}
              onChange={() => handleHeaderFontWeight(fontWeightValue)}
            />
            <label htmlFor={fontWeightValue}>{fontWeightValue}</label>
          </div>
        ))}
      </section>

      <section className="page-setting-picker">
        <span>Header content</span>
        <textarea
          style={{ width: "80%", height: "50px" }}
          onChange={handleHeaderContent}
          value={currentTemplate?.headingSettings.content}
        />
      </section>
    </div>
  );
};

export default HeaderSetting;
