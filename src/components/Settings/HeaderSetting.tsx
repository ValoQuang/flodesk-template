import { useTemplateContext } from "../../AppContextProvider";
import { ElementSettings } from "../../types";
import TextSetting from "./TextSetting";

const HeaderSetting = () => {
  const { currentTemplate, updateTemplateSettings } = useTemplateContext();
  const headerSettings = currentTemplate?.headerSettings as ElementSettings;
  return (
    <TextSetting
      settings={headerSettings}
      onUpdateSettings={(newSettings) =>
        updateTemplateSettings({ property: "headerSettings", value: newSettings })
      }
    />
  );
};

export default HeaderSetting;
