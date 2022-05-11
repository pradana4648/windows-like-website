import c from "../assets/icons/c.ico";
import d from "../assets/icons/d.ico";
import e from "../assets/icons/e.ico";

export enum SelectedDiskInfo {
  c = "c",
  d = "d",
  e = "e",
}

export const explorerMenu: {
  info: SelectedDiskInfo;
  id: number;
  icon: string;
  name: string;
}[] = [
  {
    id: 1,
    icon: c,
    name: "Local Disk",
    info: SelectedDiskInfo.c,
  },
  {
    id: 2,
    icon: d,
    name: "Bokep ͡° ͜ʖ ͡°",
    info: SelectedDiskInfo.d,
  },
  {
    id: 3,
    icon: e,
    name: "Pap Anu",
    info: SelectedDiskInfo.e,
  },
];
