import { FC } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Section } from "@/components/ui/section";
import { Activity } from "@/types";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getDayOfWeek } from "@/lib/format/getDayOfWeek";

type Props = {
  data: Activity[];
};

export const WeeklyActivity: FC<Props> = ({ data = [] }) => {
  return (
    <Section title="Weekly Activity">
      <div className="p-6 bg-white rounded-[25px] w-[730px] h-[370px]">
        <ChartContainer config={chartConfig} className="max-h-[322px] w-full">
          <BarChart accessibilityLayer data={data} barGap={barGap}>
            <CartesianGrid stroke="#F3F3F5" horizontal={true} vertical={false} />
            <XAxis
              dataKey="date"
              tick={{
                fill: "#718EBF",
                fontFamily: "'Inter', sans-serif",
                fontSize: fontSize,
                fontWeight: 400,
                textAnchor: "middle",
              }}
              axisLine={{ stroke: "#F3F3F5" }}
              tickLine={false}
              tickFormatter={(value) => getDayOfWeek(value, "short")}
            />
            <YAxis
              tick={{
                fill: "#718EBF",
                fontFamily: "'Inter', sans-serif",
                fontSize: fontSize,
                fontWeight: 400,
              }}
              axisLine={false}
              tickLine={false}
              tickCount={6}
              domain={[0, 500]}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent className="bg-white text-black text-14" indicator="dashed" />
              }
            />
            <ChartLegend
              verticalAlign="top"
              content={<ChartLegendContent className="justify-end text-blue-400 text-[16px]" />}
            />

            <Bar dataKey="deposit" fill="#396AFF" radius={10} barSize={barSize} />
            <Bar dataKey="withdraw" fill="#232323" radius={10} barSize={barSize} />
          </BarChart>
        </ChartContainer>
      </div>
    </Section>
  );
};

const fontSize = 14;
const barSize = 16;
const barGap = 12;

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
