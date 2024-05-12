import { useTemplateContext } from "../../AppContextProvider";
import { ElementSettings } from "../../types";
import TextSetting from "./TextSetting";

const ParagraphSetting = () => {
  const { currentTemplate, updateTemplateSettings } = useTemplateContext();
  const paragraphSettings = currentTemplate?.paragraphSettings as ElementSettings;
  
  return (
    <TextSetting
      settings={paragraphSettings}
      onUpdateSettings={(newSettings) =>
        updateTemplateSettings({ property: "paragraphSettings", value: newSettings })
      }
    />
  );
};

export default ParagraphSetting;
