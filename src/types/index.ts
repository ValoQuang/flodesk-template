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
  updateTemplateSettings: Dispatch<SetStateAction<any>>;
  setCurrentElement: Dispatch<SetStateAction<any>>;
  currentElement?: string | null | any;
  templateList: Template[] | [];
  fetchTemplateList: any;
}
