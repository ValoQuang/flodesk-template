import React from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import TemplateLetter from "../../templateList/TemplateLetter";
import TemplateResume from "../../templateList/TemplateResume";

const Preview = () => {
  const { template } = useTemplateContext();
  const [selectEl, setSelectEl] = React.useState<string | null>(null);

  const handleSelectElement = (id: string) => {
    setSelectEl(id);
  };

  const renderTemplate = () => {
    if (template?.id === "letter") {
      return <TemplateLetter />;
    } else {
      return <TemplateResume />;
    }
  };

  return <>{renderTemplate()}</>;
};

export default Preview;
