import { Dispatch, SetStateAction } from "react";

export interface Template {
  id: string;
  title: string;
  backgroundColor: string;
  contentWidth: string;
  headingSettings: ElementSettings;
  paragraphSettings: ElementSettings;
}

export interface ElementSettings {
  fontSize: string;
  color: string;
  fontWeight?: string;
  content: string;
}
export interface TemplateContextType {
  template: Template | null;
  setTemplate: Dispatch<SetStateAction<Template>>;
  updateHeadingSettings: Dispatch<SetStateAction<ElementSettings>>;
  updateParagraphSettings: Dispatch<SetStateAction<ElementSettings>>;
}