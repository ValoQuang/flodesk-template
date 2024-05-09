import { Template } from "../types";

function generateRandomId() {
  return Math.random().toString(36);
}

const mockTemplates: Template[] = [
  {
    id: generateRandomId(),
    title: "Template One",
    backgroundColor: "#eb8080",
    fontSize: "16px",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: generateRandomId(),
    title: "Template Two",
    backgroundColor: "#dbf07f",
    fontSize: "14px",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: generateRandomId(),
    title: "Template Three",
    backgroundColor: "#9389ec",
    fontSize: "18px",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export { mockTemplates };
