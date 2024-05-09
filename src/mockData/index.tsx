import { Template } from "../types";

const mockTemplates: Template[] = [
  {
    id: '1',
    title: "Template One",
    backgroundColor: "#eb8080",
    contentWidth: "80%",
    headingSettings: {
      fontSize: "24px",
      fontWeight: "Bold",
      color: "#333333",
      content: "Header template 1",
    },
    paragraphSettings: {
      fontSize: "16px",
      color: "#666666",
      content: "Paragraph template 1",
    },
  },
  {
    id: '2',
    title: "Template Two",
    backgroundColor: "#dbf07f",
    contentWidth: "70%",
    headingSettings: {
      fontSize: "28px",
      fontWeight: "Bold",
      color: "#444444",
      content: "Header template 2",
    },
    paragraphSettings: {
      fontSize: "14px",
      color: "#888888",
      content: "Paragraph template 2",
    },
  },
];

export { mockTemplates };
