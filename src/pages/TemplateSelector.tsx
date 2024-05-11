import { ReactNode, useEffect } from "react";
import { useTemplateContext } from "../AppContextProvider";
import { mockTemplates } from "../mockData/index";
import { Template } from "../types";
import "./TemplateSelector.css";
import TemplateBuilder from "./TemplateBuilder";

const TemplateSelector: React.FC = () => {
  const { template, setTemplate, templateList, fetchTemplateList } = useTemplateContext();

  const handleSelectTemplate = (template: Template) => {
    setTemplate(template);
  };

  useEffect(() => {
    //I created context here to simulate the API call from backend to fetch template list.
    fetchTemplateList(mockTemplates);
  }, []);

  const renderTemplateBuilder = (children: ReactNode) => {
    return <>{template === null ? children : <TemplateBuilder />}</>;
  };

  return (
    <>
      {renderTemplateBuilder(
        <div className="templateSelector">
          <h1>Choose a template to start</h1>
          <div className="templateSelector-container">
            <>
              {templateList.map((template: Template, index: number) => (
                <div
                  key={index}
                  className="templateSelector-box"
                  onClick={() => handleSelectTemplate(template)}
                >
                  <section
                    style={{ backgroundColor: template.backgroundColor }}
                  ></section>
                  <p key={index}>{template.title}</p>
                </div>
              ))}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default TemplateSelector;
