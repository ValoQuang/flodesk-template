import { ReactNode, lazy } from "react";
import { useTemplateContext } from "../AppContextProvider";
import { mockTemplates } from "../mockData/index";
import { Template } from "../types";
import "./TemplateSelector.css";

const TemplateBuilder = lazy(() => import("./TemplateBuilder"));

const TemplateSelector: React.FC = () => {
  const { template, setTemplate } = useTemplateContext();

  const handleSelectTemplate = (template: Template) => {
    setTemplate(template);
  };

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
              {mockTemplates.map((template: Template, index: number) => (
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
