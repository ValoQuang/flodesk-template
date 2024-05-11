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

interface TemplateDynamicVariables {
  template: React.CSSProperties;
  header:ElementSettings;
  paragraph: ElementSettings;
  currentElementTag: string | null | undefined;
}
export interface TemplateProps {
  templateDynamicVariables: TemplateDynamicVariables;
}

interface UpdateTemplateSettingsAction {
  property: keyof Template;
  value: Template[keyof Template];
}
export interface TemplateContextType {
  template: Template | null;
  setTemplate: Dispatch<SetStateAction<Template>>;
  updateTemplateSettings: Dispatch<
    SetStateAction<UpdateTemplateSettingsAction>
  >;
  setCurrentElement: Dispatch<SetStateAction<string | null>>;
  currentElementTag?: string | null;
  templateList: Template[] | [];
  fetchTemplateList: Dispatch<SetStateAction<Template[] | null>>;
}
