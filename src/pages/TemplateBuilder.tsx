import Navbar from "../components/Navbar/Navbar";
import Preview from "../components/Preview/Preview";
import Editor from "../components/Editor/Editor";
import "./TemplateBuilder.css";

const TemplateBuilder = () => {
  return (
    <div className="templateBuilder">
      <Navbar />
      <div className="templateBuilder-editor">
        <section className="templateBuilder-display">
          <Preview />
        </section>

        <section className="templateBuilder-setting">
          <Editor />
        </section>
      </div>
    </div>
  );
};

export default TemplateBuilder;
