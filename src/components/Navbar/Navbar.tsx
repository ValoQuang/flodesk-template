import { MouseEventHandler, SetStateAction } from "react";
import "./Navbar.css";
import { useTemplateContext } from "../../AppContextProvider";
import { Template } from "../../types";

const Navbar = () => {
  const { template, setCurrentElement, setTemplate, templateList } =
    useTemplateContext();

  const handleBackToTemplateSelector = () => {
    setTemplate(null as unknown as SetStateAction<Template>);
  };

  const handleExportStaticPage = () => {
    return new Promise<void>((resolve, _) => {
      setCurrentElement(null);
      resolve();
    }).then(() => {
      const element = document.getElementById("export-static-page");
      if (element) {
        const elementHTML = element.outerHTML;
        const file = new Blob([elementHTML], { type: "text/html" });
        const url = URL.createObjectURL(file);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = `${template?.title}.html`;
        downloadLink.click();
        URL.revokeObjectURL(url);

        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(elementHTML);
        }
      }
    });
  };

  const handleSaveTemplate = () => {
    const foundIndex = templateList.findIndex((x) => x.id == template?.id);
    templateList[foundIndex] = template!;
  };

  const renderButton = (title: string, onClick: MouseEventHandler<HTMLButtonElement> | undefined) => {
    return (
      <button className="navbar-button" onClick={onClick}>
        {title}
      </button>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3>{template?.title}</h3>
        <section>
          {renderButton("Back", handleBackToTemplateSelector)}
          {renderButton("Save", handleSaveTemplate)}
          {renderButton("Export", handleExportStaticPage)}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
