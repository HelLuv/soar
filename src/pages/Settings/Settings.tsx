import { FC } from "react";
import { SettingsTabs } from "@/modules/settings";

const Settings: FC = () => {
  return (
    <section className="bg-white w-full h-full p-[30px] rounded-[25px]">
      <SettingsTabs />
    </section>
  );
};

export default Settings;
