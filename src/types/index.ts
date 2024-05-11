import { Dispatch, SetStateAction } from "react";

export interface Template {
  id: string;
  title: string;
  backgroundColor: string;
  contentWidth: string;
  headerSettings: ElementSettings;
  paragraphSettings: ElementSettings;
}

export interface ElementSettings {
  fontSize: string;
  color: string;
  fontWeight?: string;
  content: string;
}

interface TemplateDynamicVariables {
  currentTemplate: React.CSSProperties;
  header: ElementSettings;
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
  currentTemplate: Template | null;
  setCurrentTemplate: Dispatch<SetStateAction<Template>>;
  updateTemplateSettings: Dispatch<
    SetStateAction<UpdateTemplateSettingsAction>
  >;
  setCurrentElementTag: Dispatch<SetStateAction<string | null>>;
  currentElementTag?: string | null;
  templatesList: Template[] | [];
  setTemplatesList: Dispatch<SetStateAction<Template[] | null>>;
  exportRef?: any;
}
