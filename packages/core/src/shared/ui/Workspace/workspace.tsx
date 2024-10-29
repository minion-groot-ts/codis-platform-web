'use client'

import { Icon } from "@iconify/react";
import { Workspace, WorkspaceItem } from "./types";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";
import { cn } from "@nextui-org/theme";
import React, { Key, useEffect } from "react";
import { SidebarItem } from "@@/shared/ui/SideBar";
import { SharedSelection } from "@nextui-org/system";

interface WorkspacesProps {
  copyright: string;
  defaultItem: string;
  isCompact: boolean;
  items: Workspace[];
  // onWorkspaceChange: (keys: SharedSelection) => void,
  onWorkspaceChange: (items: SidebarItem[]) => void,
}

export const Workspaces = ({
  items,
  copyright,
  isCompact,
  defaultItem,
  onWorkspaceChange,
}: WorkspacesProps) => {

  const workspaceChange = (keys: SharedSelection): void => {
    const [key] = keys;
    const [item] = items;

    const workspace:| WorkspaceItem[]| undefined = item?.items.filter((item) => item.value === key);

    if ((workspace as WorkspaceItem[]).length > 0) {
      for (const item of workspace || []) {
        onWorkspaceChange(item.items);
      }
    } else {
      onWorkspaceChange([]);
    }
  }

  useEffect(() => {
    // workspaceChange([defaultItem as Key]);
  });
  

  return (
    <div
      className={cn("flex flex-col gap-y-2", {
        "w-0 opacity-0": isCompact,
      })}
    >
      <Select
        disableSelectorIconRotation
        aria-label="Select workspace"
        className="px-1"
        classNames={{
          trigger:
            "min-h-14 bg-transparent border-small border-default-200 dark:border-default-100 data-[hover=true]:border-default-500 dark:data-[hover=true]:border-default-200 data-[hover=true]:bg-transparent",
        }}
        defaultSelectedKeys={defaultItem || []}
        items={items}
        onSelectionChange={workspaceChange}
        placeholder="Select workspace"
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="ml-1 flex flex-col gap-y-0.5">
              <span className="text-tiny leading-4">{copyright}</span>
              <span className="text-tiny text-default-400">
                {item.data?.label}
              </span>
            </div>
          ));
        }}
        selectorIcon={
          <Icon
            color="hsl(var(--codis-default-500))"
            icon="lucide:chevrons-up-down"
          />
        }
        startContent={
          <div className="relative h-10 w-10 flex-none rounded-full border-small border-default-300">
            <Icon
              className="ml-2 mt-2 text-default-500"
              icon="solar:users-group-rounded-linear"
              width={24}
            />
          </div>
        }
      >
        {(section) => (
          <SelectSection
            key={section.value}
            hideSelectedIcon
            showDivider
            aria-label={section.label}
            items={section.items}
            title={section.label}
          >
            {/* @ts-ignore */}
            {(item) => (
              <SelectItem
                key={item.value}
                aria-label={item.label}
                textValue={item.label}
              >
                <div className="flex flex-row items-center justify-between gap-1">
                  <span>{item.label}</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-small border-default-300">
                    <Icon
                      className="text-default-500"
                      icon="solar:users-group-rounded-linear"
                      width={16}
                    />
                  </div>
                </div>
              </SelectItem>
            )}
          </SelectSection>
        )}
      </Select>
    </div>
  );
};
