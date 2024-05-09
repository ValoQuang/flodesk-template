export interface Template {
  id: string;
  title: string;
  backgroundColor: string;
  contentWidth: string;
  headingSettings?: ElementSettings;
  paragraphSettings?: ElementSettings;
}

interface ElementSettings {
  fontSize: string;
  color: string;
}
