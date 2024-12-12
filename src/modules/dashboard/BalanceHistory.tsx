import { Section } from "@/components/ui/section";
import { FC } from "react";
import { AreaChart } from "@/components/AreaChart";

type Props = {
  data: any[];
};

export const BalanceHistory: FC<Props> = ({ data }) => {
  return (
    <Section title="Balance History">
      <div className="p-6 bg-white rounded-[25px] w-[635px] h-[270px]">
        <AreaChart data={data} dataKey="month" />
      </div>
    </Section>
  );
};
