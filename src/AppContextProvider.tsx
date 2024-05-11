import { createContext, useContext, useState, ReactNode } from "react";
import { ElementSettings, Template, TemplateContextType } from "./types";

export const defaultValue: TemplateContextType = {
  templateList: [],
  template: {
    id: "",
    title: "",
    backgroundColor: "",
    contentWidth: "",
    headingSettings: {
      fontSize: "",
      fontWeight: "",
      color: "",
      content: "",
    },
    paragraphSettings: {
      fontSize: "",
      color: "",
      content: "",
    },
  },
  setTemplate: () => {},
  fetchTemplateList: () => {},
  updateTemplateSettings: () => {},
  setCurrentElement: () => {},
};

const TemplateContext = createContext<TemplateContextType>(defaultValue);

export const useTemplateContext = () => useContext(TemplateContext);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [currentElement, setCurrentEl] = useState<string | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);
  const [templateList, setTemplateList] = useState<Template[]>([]);

  const setCurrentElement = (newEl: string | null) => {
    if (template) {
      setCurrentEl(newEl);
    }
  };

  const fetchTemplateList = (data: Template[]) => {
    setTemplateList(data);
  };

  const updateTemplateSettings = (settings: {
    property: string;
    value: string;
  }) => {
    const { property, value } = settings;
    if (template && template.hasOwnProperty(property)) {
      setTemplate((prevTemplate) => ({
        ...prevTemplate!,
        [property]: value,
      }));
    }
  };

  return (
    <TemplateContext.Provider
      value={
        {
          template,
          setTemplate,
          updateTemplateSettings,
          setCurrentElement,
          currentElement,
          templateList,
          fetchTemplateList,
        } as TemplateContextType
      }
    >
      {children}
    </TemplateContext.Provider>
  );
};
