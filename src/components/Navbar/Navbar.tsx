import { SetStateAction } from "react";
import "./Navbar.css";
import { useTemplateContext } from "../../AppContextProvider";
import { Template } from "../../types";

const Navbar = () => {
  const { setTemplate } = useTemplateContext();
  const handleBackToTemplateSelector = () => {
    setTemplate(null as unknown as SetStateAction<Template>);
  };

  const handleExportStaticPage = () => {};

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3>Template</h3>
        <section>
          {" "}
          <button className="navbar-button" onClick={handleBackToTemplateSelector}>Back</button>
          <button className="navbar-button">Export</button>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
