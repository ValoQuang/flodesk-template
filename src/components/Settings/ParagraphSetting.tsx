import { useState } from "react";
import { useTemplateContext } from "../../AppContextProvider";
import { ColorResult, SketchPicker } from "react-color";
import { fontWeightOption } from "../../mockData";

const ParagraphSetting = () => {
  const { template, updateTemplateSettings } = useTemplateContext();
  const [picker, setPicker] = useState<boolean>(false);

  const handleOpenPicker = () => {
    setPicker(!picker);
  };

  const handleParagraphFontSize = (event: { target: { value: string } }) => {
    const newSize = event.target.value;
    if (newSize)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: { ...template?.paragraphSettings, fontSize: `${newSize}px` },
      });
  };

  const handleParagraphFontWeight = (newWeight: string) => {
    if (newWeight)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: { ...template?.paragraphSettings, fontWeight: newWeight },
      });
  };

  const handleParagraphContent = (content: { target: { value: string } }) => {
    const newContent = content.target.value;
    if (newContent)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: { ...template?.paragraphSettings, content: newContent },
      });
  };

  const handleParagraphColor = (color: ColorResult) => {
    if (color.hex)
      updateTemplateSettings({
        property: "paragraphSettings",
        value: { ...template?.paragraphSettings, color: color.hex },
      });
  };

  return (
    <div>
      <section className="page-setting-picker">
        <span>Paragraph Color</span>
        <div
          style={{
            backgroundColor: template?.paragraphSettings.color,
            width: "35px",
            height: "35px",
            borderWidth: "1px",
          }}
          onClick={handleOpenPicker}
        ></div>
        {picker && (
          <SketchPicker
            className="templateEditor-sketch"
            color={template?.paragraphSettings.color}
            onChangeComplete={handleParagraphColor}
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
          onChange={handleParagraphFontSize}
          value={parseInt(template?.paragraphSettings.fontSize!)}
        ></input>
      </section>

      <section className="page-setting-picker">
        <span>Font weight</span>
        {fontWeightOption.map((fontWeightValue) => (
          <div key={fontWeightValue}>
            <input
              checked={template?.paragraphSettings.fontWeight === fontWeightValue}
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
          value={template?.paragraphSettings.content}
        />
      </section>
    </div>
  );
};

export default ParagraphSetting;
