import { Template } from "../types";

function generateRandomId() {
  return Math.random().toString(36);
}

const mockTemplates: Template[] = [
  {
    id: generateRandomId(),
    title: "Template One",
    backgroundColor: "#eb8080",
    contentWidth: "80%",
    headingSettings: {
      fontSize: "24px",
      color: "#333333",
    },
    paragraphSettings: {
      fontSize: "16px",
      color: "#666666",
    },
  },
  {
    id: generateRandomId(),
    title: "Template Two",
    backgroundColor: "#dbf07f",
    contentWidth: "90%",
    headingSettings: {
      fontSize: "28px",
      color: "#444444",
    },
    paragraphSettings: {
      fontSize: "14px",
      color: "#888888",
    },
  },
  {
    id: generateRandomId(),
    title: "Template Three",
    backgroundColor: "#9389ec",
    contentWidth: "85%",
    headingSettings: {
      fontSize: "32px",
      color: "#555555",
    },
    paragraphSettings: {
      fontSize: "18px",
      color: "#777777",
    },
  },
];

export { mockTemplates };
