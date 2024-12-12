import { FC } from "react";
import { Section } from "@/components/ui/section";
import { Activity } from "@/types";
import { ChartConfig } from "@/components/ui/chart";
import { BarChart } from "@/components/BarChart";
import { transformChartConfig } from "@/lib/transformChartConfigIntoBars";

type Props = {
  data: Activity[];
};

export const WeeklyActivity: FC<Props> = ({ data = [] }) => {
  return (
    <Section title="Weekly Activity">
      <div className="p-6 bg-white rounded-[25px] w-[730px] h-[370px]">
        <BarChart data={data} chartConfig={chartConfig} bars={transformChartConfig(chartConfig)} />
      </div>
    </Section>
  );
};

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "#396AFF",
  },
  withdraw: {
    label: "Withdraw",
    color: "#232323",
  },
} satisfies ChartConfig;
