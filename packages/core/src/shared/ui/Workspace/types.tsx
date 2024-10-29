import { SidebarItem } from "@@/shared/ui";

export type WorkspaceItem = {
  value: string;
  label: string;
  items: SidebarItem[]
};

export type Workspace = {
  value: string;
  label: string;
  items: WorkspaceItem[];
};
