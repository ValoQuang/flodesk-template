import { useState } from "react";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult, SketchPicker } from "react-color";
import { fontWeightOption } from "../../mockData";
import { ElementSettings } from "../../types";

const ParagraphSetting = () => {
  const { currentTemplate, updateTemplateSettings } = useTemplateContext();
  const [picker, setPicker] = useState<boolean>(false);

  const handleOpenPicker = () => {
    setPicker(!picker);
  };

  const handleParagraphFontSize = (event: { target: { value: string } }) => {
    const newSize = event.target.value;
    if (newSize)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: {
          ...currentTemplate?.paragraphSettings,
          fontSize: `${newSize}px`,
        } as ElementSettings,
      });
  };

  const handleParagraphFontWeight = (newWeight: string) => {
    if (newWeight)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: {
          ...currentTemplate?.paragraphSettings,
          fontWeight: newWeight,
        } as ElementSettings,
      });
  };

  const handleParagraphContent = (content: { target: { value: string } }) => {
    const newContent = content.target.value;
    if (newContent)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: {
          ...currentTemplate?.paragraphSettings,
          content: newContent,
        } as ElementSettings,
      });
  };

  const handleParagraphColor = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: {
          ...currentTemplate?.paragraphSettings,
          color: color.hex,
        } as ElementSettings,
      });
  };

  return (
    <div>
      <section className="page-setting-picker">
        <span>Paragraph Color</span>
        <div
          style={{
            backgroundColor: currentTemplate?.paragraphSettings.color,
            width: "35px",
            height: "35px",
            borderWidth: "1px",
          }}
          onClick={handleOpenPicker}
        ></div>
        {picker && (
          <SketchPicker
            className="templateEditor-sketch"
            color={currentTemplate?.paragraphSettings.color}
            onChangeComplete={handleParagraphColor}
          />
        )}
      </section>

      <section className="page-setting-picker">
        <span>Font size</span>
        <input
          type="range"
          min="5"
          max="96"
          step="1"
          onChange={handleParagraphFontSize}
          value={parseInt(currentTemplate?.paragraphSettings.fontSize!)}
        ></input>
      </section>

      <section className="page-setting-picker">
        <span>Font weight</span>
        {fontWeightOption.map((fontWeightValue) => (
          <div key={fontWeightValue}>
            <input
              checked={
                currentTemplate?.paragraphSettings.fontWeight ===
                fontWeightValue
              }
              type="radio"
              id={fontWeightValue}
              onChange={() => handleParagraphFontWeight(fontWeightValue)}
            />
            <label htmlFor={fontWeightValue}>{fontWeightValue}</label>
          </div>
        ))}
      </section>

      <section className="page-setting-picker">
        <span>Paragraph content</span>
        <textarea
          style={{ width: "80%", height: "50px" }}
          onChange={handleParagraphContent}
          value={currentTemplate?.paragraphSettings.content}
        />
      </section>
    </div>
  );
};

export default ParagraphSetting;
