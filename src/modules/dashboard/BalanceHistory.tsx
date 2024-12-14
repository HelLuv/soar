import { Section } from "@/components/ui/section";
import { FC } from "react";
import { AreaChart } from "@/components/AreaChart";
import { Balance } from "@/types";

type Props = {
  data: Balance[];
};

export const BalanceHistory: FC<Props> = ({ data }) => {
  return (
    <Section title="Balance History" className="max-md:w-full">
      <div className="p-6 bg-white rounded-[25px] w-[635px] h-[270px] max-md:w-full">
        <AreaChart data={data} dataKey="date" />
      </div>
    </Section>
  );
};
