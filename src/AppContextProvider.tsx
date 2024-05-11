import { createContext, useContext, useState, ReactNode, useRef } from "react";
import { Template, TemplateContextType } from "./types";
import { ELEMENT_TAG } from "./enum";

export const defaultValue: TemplateContextType = {
  exportRef: null,
  templatesList: [],
  currentTemplate: {
    id: "",
    title: "",
    backgroundColor: "",
    contentWidth: "",
    headerSettings: {
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
  setCurrentTemplate: () => {},
  fetchTemplateList: () => {},
  updateTemplateSettings: () => {},
  setCurrentElement: () => {},
};

const TemplateContext = createContext<TemplateContextType>(defaultValue);

export const useTemplateContext = () => useContext(TemplateContext);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [currentElementTag, setCurrentEl] = useState<string | null>(
    ELEMENT_TAG.PAGE
  );
  const [currentTemplate, setCurrentTemplate] = useState<Template | null>(null);
  const [templatesList, setTemplateList] = useState<Template[]>([]);
  const exportRef = useRef(null);

  const setCurrentElement = (newEl: string | null) => {
    if (currentTemplate) {
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
    if (currentTemplate && currentTemplate.hasOwnProperty(property)) {
      setCurrentTemplate((prevTemplate) => ({
        ...prevTemplate!,
        [property]: value,
      }));
    }
  };

  return (
    <TemplateContext.Provider
      value={
        {
          currentTemplate,
          setCurrentTemplate,
          updateTemplateSettings,
          setCurrentElement,
          currentElementTag,
          templatesList,
          fetchTemplateList,
          exportRef
        } as TemplateContextType
      }
    >
      {children}
    </TemplateContext.Provider>
  );
};
