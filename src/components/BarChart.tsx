import { FC } from "react";
import { Bar, BarChart as ReBarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Activity } from "@/types";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getDayOfWeek } from "@/lib/format";

export type BarType = {
  key: string;
  fill: string;
};

type Props = {
  data: Activity[];
  chartConfig?: ChartConfig;
  tickFontSize?: number;
  barSize?: number;
  barGap?: number;
  bars: BarType[];
};

export const BarChart: FC<Props> = ({
  data = [],
  chartConfig = {},
  tickFontSize = 14,
  barSize = 16,
  barGap = 12,
  bars = [],
}) => {
  return (
    <ChartContainer config={chartConfig} className="max-h-[322px] max-md:max-h-[202px] w-full">
      <ReBarChart
        accessibilityLayer
        data={data}
        barGap={barGap}
        margin={{
          top: 0,
          right: 0,
          left: -20,
          bottom: -10,
        }}
        className="max-sm:-left-6 max-sm:-bottom-4"
      >
        <CartesianGrid stroke="#F3F3F5" horizontal={true} vertical={false} />
        <XAxis
          dataKey="date"
          tick={{
            fill: "#718EBF",
            fontFamily: "'Inter', sans-serif",
            fontSize: tickFontSize,
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
            fontSize: tickFontSize,
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

        {bars.map((bar) => (
          <Bar dataKey={bar.key} fill={bar.fill} radius={10} barSize={barSize} key={bar.key} />
        ))}
      </ReBarChart>
    </ChartContainer>
  );
};
