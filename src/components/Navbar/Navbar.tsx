import { MouseEventHandler, SetStateAction } from "react";
import "./Navbar.css";
import { useTemplateContext } from "../../AppContextProvider";
import { Template } from "../../types";

const Navbar = () => {
  const {
    exportRef,
    currentTemplate,
    setCurrentElementTag,
    setCurrentTemplate,
    templatesList,
    updateTemplateSettings,
  } = useTemplateContext();

  const handleBackToTemplateSelector = () => {
    const foundIndex = templatesList.findIndex(
      (target) => target.id === currentTemplate?.id
    );
    templatesList[foundIndex] = currentTemplate!;

    setCurrentTemplate(null as unknown as SetStateAction<Template>);
    setCurrentElementTag(null);
  };

  const handleExportStaticPage = () => {
    if (exportRef.current)
      return new Promise<void>((resolve, _) => {
        setCurrentElementTag(null);
        resolve();
      }).then(() => {
        const elementHTML = exportRef.current.outerHTML;
        const file = new Blob([elementHTML], { type: "text/html" });
        const url = URL.createObjectURL(file);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = `${currentTemplate?.title}.html`;
        downloadLink.click();
        URL.revokeObjectURL(url);

        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(elementHTML);
        }
      });
  };

  const handleTemplateTitle = (content: { target: { value: string } }) => {
    const newTitle = content.target.value;
    if (newTitle) {
      updateTemplateSettings({
        property: "title",
        value: newTitle,
      });
    }
  };

  const renderButton = (
    title: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    return (
      <button className="navbar-button" onClick={onClick}>
        {title}
      </button>
    );
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <input
          className="navbar-input-header"
          type="text"
          onChange={handleTemplateTitle}
          value={currentTemplate?.title}
        />

        <section>
          {renderButton("Back", handleBackToTemplateSelector)}
          {renderButton("Export", handleExportStaticPage)}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
