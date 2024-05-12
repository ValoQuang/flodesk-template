import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { fontWeightOption } from "../../mockData";
import { ElementSettings } from "../../types";
import "./TextSetting.css";

interface TextSettingProps {
  settings: ElementSettings;
  onUpdateSettings: (newSettings: ElementSettings) => void;
}

const TextSetting: React.FC<TextSettingProps> = ({ settings, onUpdateSettings }) => {
  const [picker, setPicker] = useState<boolean>(false);

  const handleOpenPicker = () => {
    setPicker(!picker);
  };

  const handleFontSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;
    if (newSize)
      onUpdateSettings({
        ...settings,
        fontSize: `${newSize}px`,
      });
  };

  const handleFontWeight = (newWeight: string) => {
    onUpdateSettings({
      ...settings,
      fontWeight: newWeight,
    });
  };

  const handleContent = (content: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = content.target.value;
    onUpdateSettings({
      ...settings,
      content: newContent,
    });
  };

  const handleColor = (color: ColorResult) => {
    onUpdateSettings({
      ...settings,
      color: color.hex,
    });
  };

  return (
    <div>
      <section className="page-setting-picker">
        <span>Text color</span>
        <div
          style={{
            backgroundColor: settings.color,
            width: "35px",
            height: "35px",
            borderWidth: "1px",
          }}
          onClick={handleOpenPicker}
        ></div>
        {picker && (
          <SketchPicker
            className="templateEditor-sketch"
            color={settings.color}
            onChangeComplete={handleColor}
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
          onChange={handleFontSize}
          value={parseInt(settings.fontSize)}
        ></input>
      </section>

      <section className="page-setting-picker">
        <span>Font weight</span>
        {fontWeightOption.map((fontWeightValue) => (
          <div key={fontWeightValue}>
            <input
              checked={settings.fontWeight === fontWeightValue}
              type="radio"
              id={fontWeightValue}
              onChange={() => handleFontWeight(fontWeightValue)}
            />
            <label htmlFor={fontWeightValue}>{fontWeightValue}</label>
          </div>
        ))}
      </section>

      <section className="page-setting-picker">
        <span>Text content</span>
        <textarea
          style={{ width: "250px", height: "200px" }}
          onChange={handleContent}
          value={settings.content}
        />
      </section>
    </div>
  );
};

export default TextSetting;
