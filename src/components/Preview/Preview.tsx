import React from "react";
import "./Preview.css";
import { useTemplateContext } from "../../AppContextProvider";
import TemplateLetter from "../../templateList/TemplateLetter";
import TemplateResume from "../../templateList/TemplateResume";
import "./Preview.css";

const Preview = () => {
  const { template } = useTemplateContext();
  const [selectEl, setSelectEl] = React.useState<string | null>(null);

  const handleSelectElement = (id: string) => {
    setSelectEl(id);
  };

  const renderTemplate = () => {
    switch (template?.id) {
      case "letter":
        return <TemplateLetter />;
      case "resume":
        return <TemplateResume />;
      // Add more cases for additional templates if needed
      default:
        return null; 
    }
  };

  return (
    <div className="preview" id="export-static-page">
      {renderTemplate()}
    </div>
  );
};

export default Preview;
