import { ReactNode, useEffect } from "react";
import { useTemplateContext } from "../AppContextProvider";
import { mockTemplates } from "../mockData/index";
import { Template } from "../types";
import "./TemplateSelector.css";
import TemplateBuilder from "./TemplateBuilder";

const TemplateSelector: React.FC = () => {
  const {
    currentTemplate,
    setCurrentTemplate,
    templatesList,
    setTemplatesList,
  } = useTemplateContext();

  const handleSelectTemplate = (currentTemplate: Template) => {
    setCurrentTemplate(currentTemplate);
  };

  useEffect(() => {
    //I created context here to simulate the API call from backend to fetch currentTemplate list.
    setTemplatesList(mockTemplates);
  }, []);

  const renderTemplateBuilder = (children: ReactNode) => {
    return <>{currentTemplate === null ? children : <TemplateBuilder />}</>;
  };

  return (
    <>
      {renderTemplateBuilder(
        <div className="templateSelector">
          <h1>Choose a currentTemplate to start</h1>
          <div className="templateSelector-container">
            <>
              {templatesList.map((currentTemplate: Template, index: number) => (
                <div
                  key={index}
                  className="templateSelector-box"
                  onClick={() => handleSelectTemplate(currentTemplate)}
                >
                  <section
                    style={{ backgroundColor: currentTemplate.backgroundColor }}
                  ></section>
                  <p key={index}>{currentTemplate.title}</p>
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
