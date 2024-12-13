import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import { SETTINGS_TABS } from "./settings-tabs";
import { cn } from "@/lib/utils";

export const SettingsTabs: FC = () => {
  const [defaultTab] = useState(SETTINGS_TABS[0]);
  const [activeTabKey, setActiveTabKey] = useState(defaultTab.key);

  const handleTabChange = (value: string) => {
    setActiveTabKey(value);
  };

  return (
    <Tabs value={activeTabKey} defaultValue={defaultTab.key} onValueChange={handleTabChange}>
      <TabsList className="gap-8 w-full justify-start border-b border-b-[#F4F5F7] ">
        {SETTINGS_TABS.map((tab) => (
          <TabsTrigger
            className={cn("!border-none !shadow-none text-[#718EBF] text-[16px] pb-2", {
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
