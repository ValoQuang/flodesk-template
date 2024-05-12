import { useTemplateContext } from "../../AppContextProvider";
import { ElementSettings } from "../../types";
import TextSetting from "./TextSetting";

const HeaderSetting = () => {
  const { currentElementTag, currentTemplate, updateTemplateSettings } = useTemplateContext();
  const headerSettings = currentTemplate?.headerSettings as ElementSettings;
  return (
    <TextSetting
    currentElementTag={currentElementTag}
      settings={headerSettings}
      onUpdateSettings={(newSettings) =>
        updateTemplateSettings({ property: "headerSettings", value: newSettings })
      }
    />
  );
};

export default HeaderSetting;
