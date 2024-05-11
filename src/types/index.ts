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

export interface TemplateProps {
  templateStyle: React.CSSProperties;
  headerStyle: ElementSettings;
  paragraphStyle: ElementSettings;
  template: Template;
  currentElement?: string | null;
}

interface UpdateTemplateSettingsAction {
  property: keyof Template;
  value: Template[keyof Template]
}
export interface TemplateContextType {
  template: Template | null;
  setTemplate: Dispatch<SetStateAction<Template>>;
  updateTemplateSettings: Dispatch<SetStateAction<UpdateTemplateSettingsAction>>;
  setCurrentElement: Dispatch<SetStateAction<string | null>>;
  currentElement?: string | null;
  templateList: Template[] | [];
  fetchTemplateList: Dispatch<SetStateAction<Template[] | null>>;
}
