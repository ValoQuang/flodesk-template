import { TEMPLATE_ID } from "../enum";
import { Template } from "../types";

const fontWeightOption = ["lighter", "normal", "bold"];

const mockTemplates: Template[] = [
  {
    id: TEMPLATE_ID.LETTER,
    title: "Template Letter",
    backgroundColor: "#363632",
    contentWidth: "55%",
    headerSettings: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#eae3e3",
      content: "Header 1",
      lineHeight: "1.5"
    },
    paragraphSettings: {
      lineHeight: "1.5",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#f0eaea",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
  {
    id: TEMPLATE_ID.RESUME,
    title: "Template Resume",
    backgroundColor: "#edefe6",
    contentWidth: "90%",
    headerSettings: {
      fontSize: "54px",
      fontWeight: "bold",
      color: "#292626",
      content: "Header 2",
      lineHeight: "1.5"
    },
    paragraphSettings: {
      fontSize: "14px",
      color: "#474646",
      lineHeight: "1.5",
      fontWeight: "lighter",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  },
];

export { mockTemplates, fontWeightOption };
