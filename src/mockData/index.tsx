import { TEMPLATE_ID } from "../enum";
import { Template } from "../types";

const fontWeightOption = ["lighter", "normal", "bold"];

const mockTemplates: Template[] = [
  {
    id: TEMPLATE_ID.LETTER,
    title: "Template Letter",
    backgroundColor: "#f3cb15",
    contentWidth: "55%",
    headerSettings: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#333333",
      content: "Header 1",
    },
    paragraphSettings: {
      fontSize: "16px",
      color: "#666666",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
  {
    id: TEMPLATE_ID.RESUME,
    title: "Template Resume",
    backgroundColor: "#dbf07f",
    contentWidth: "90%",
    headerSettings: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#444444",
      content: "Header 2",
    },
    paragraphSettings: {
      fontSize: "14px",
      color: "#888888",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
];

export { mockTemplates, fontWeightOption };
