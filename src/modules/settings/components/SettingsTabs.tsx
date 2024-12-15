import { FC, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { cn } from "@/shared/utils/cn";
import { SETTINGS_TABS } from "./settings-tabs";

export const SettingsTabs: FC = () => {
  const [defaultTab] = useState(SETTINGS_TABS[0]);
  const [activeTabKey, setActiveTabKey] = useState(defaultTab.key);

  const handleTabChange = (value: string) => {
    setActiveTabKey(value);
  };

  return (
    <Tabs value={activeTabKey} defaultValue={defaultTab.key} onValueChange={handleTabChange}>
      <TabsList className="gap-8 w-full justify-start border-b border-b-[#F4F5F7] max-lg:gap-4 overflow-auto scrollbar-hidden">
        {SETTINGS_TABS.map((tab) => (
          <TabsTrigger
            className={cn("!border-none !shadow-none text-[#718EBF] text-[16px] pb-2 max-md:text-13 max-md:pb-1", {
              "!text-black active-tab": activeTabKey === tab.key,
            })}
            value={tab.key}
            key={tab.key}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {SETTINGS_TABS.map((tab) => (
        <TabsContent value={tab.key} key={tab.key}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};
