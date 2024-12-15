import { FC } from "react";
import { Pie, PieChart as RePieChart, Tooltip } from "recharts";
import { ChartContainer } from "@/shared/ui/chart";
import { renderCustomizedPieChartLabel } from "@/shared/utils/renderCustomizedPieChartLabel";

export type PieType = {
  id: string;
  value: number;
  name: string;
  fill: string;
};

type Props = {
  data: PieType[];
  valuePostfix?: string;
};

export const PieChart: FC<Props> = ({ data = [], valuePostfix = "" }) => {
  return (
    <ChartContainer config={{}} className="size-full">
      <RePieChart>
        <Pie
          data={data}
          dataKey="value"
          stroke="#FFFFFF"
          outerRadius="100%"
          labelLine={false}
          strokeWidth={5}
          label={(props) => renderCustomizedPieChartLabel(props, valuePostfix)}
        />
        <Tooltip
          content={({ payload }) => {
            if (!payload || payload.length === 0) return null;
            const { name, value } = payload[0];
            return (
              <div className="bg-white/90 text-black font-semibold text-18 rounded-[8px] p-2">
                <p>
                  {name}: {value}
                  {valuePostfix}
                </p>
              </div>
            );
          }}
        />
      </RePieChart>
    </ChartContainer>
  );
};
