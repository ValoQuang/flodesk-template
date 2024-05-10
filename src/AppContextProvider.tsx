import { createContext, useContext, useState, ReactNode } from "react";
import { ElementSettings, Template, TemplateContextType } from "./types";

export const defaultValue: TemplateContextType = {
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
  updateHeadingSettings: () => {},
  updateParagraphSettings: () => {},
  updateBackgroundColor: () => {},
  setCurrentElement: () => {},
};

const TemplateContext = createContext<TemplateContextType>(defaultValue);

export const useTemplateContext = () => useContext(TemplateContext);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
  const [currentEl, setCurrentEl] = useState<string | null>(null);
  const [template, setTemplate] = useState<Template | null>(null);

  const setCurrentElement = (newEl: string) => {
    if (template) {
      setCurrentEl(newEl)
    }
  }

  const updateBackgroundColor = (newBackgroundColor: string) => {
    if (template) {
      setTemplate((prevTemplate) => ({
        ...prevTemplate!,
        backgroundColor: newBackgroundColor,
      }));
    }
  };

  const updateHeadingSettings = (newHeadingSettings: ElementSettings) => {
    if (template) {
      setTemplate((prevTemplate) => ({
        ...prevTemplate!,
        headingSettings: {
          ...prevTemplate!.headingSettings,
          ...newHeadingSettings,
        },
      }));
    }
  };

  const updateParagraphSettings = (newParagraphSettings: ElementSettings) => {
    if (template) {
      setTemplate((prevTemplate) => ({
        ...prevTemplate!,
        paragraphSettings: {
          ...prevTemplate!.paragraphSettings,
          ...newParagraphSettings,
        },
      }));
    }
  };

  return (
    <TemplateContext.Provider
      value={
        {
          template,
          setTemplate,
          updateHeadingSettings,
          updateParagraphSettings,
          updateBackgroundColor,
          setCurrentElement,
          currentEl
        } as any
      }
    >
      {children}
    </TemplateContext.Provider>
  );
};
