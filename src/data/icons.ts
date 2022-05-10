import cmd from "../assets/icons/cmd.ico";
import docs from "../assets/icons/docs.ico";
import folder from "../assets/icons/folder.ico";

export const icons: {
  icon: string;
  name: string;
}[] = [
  {
    icon: folder,
    name: "New Folder",
  },
  {
    icon: cmd,
    name: "Command Prompt",
  },
  {
    icon: docs,
    name: "My Documents",
  },
];
