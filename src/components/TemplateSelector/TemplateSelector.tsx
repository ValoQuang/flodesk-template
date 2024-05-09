import { mockTemplates } from "../../mockData/index";
import "./TemplateSelector.css";

const TemplateSelector = () => {

  const handleSelectTemplate  = () => {
    console.log('click');
  }

  return (
    <div className="templateSelector">
      <h1>Choose a template to start</h1>
      <div className="templateSelector-container">
        {" "}
        {mockTemplates.map((template, index) => (
          <div className="templateSelector-box" onClick={handleSelectTemplate}>
            <section
              style={{ backgroundColor: template.backgroundColor }}
            ></section>
            <p key={index}>{template.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
