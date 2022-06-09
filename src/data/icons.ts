import cmd from "../assets/icons/cmd.ico";
import docs from "../assets/icons/docs.ico";

export const icons: {
  type: string;
  icon: string;
  name: string;
}[] = [
  {
    icon: cmd,

    name: "Command Prompt",
    type: "cmd",
  },
  {
    icon: docs,
    name: "My Documents",
    type: "documents",
  },
];
