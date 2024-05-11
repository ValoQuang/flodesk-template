import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { useTemplateContext } from "../../AppContextProvider";
import "./Setting.css";

const PageSetting = () => {
  const { template, updateTemplateSettings } = useTemplateContext();
  const [picker, setPicker] = useState<boolean>(false);

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

  return (
    <div>
      <section className="page-setting-picker">
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

      <section className="page-setting-picker">
        <span>Page width</span>
        <input
          type="range"
          min="10"
          max="100"
          onChange={handleContentWidth}
          value={parseInt(template?.contentWidth!)}
        ></input>
      </section>
    </div>
  );
};

export default PageSetting;