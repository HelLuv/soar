import { FC } from "react";
import { Section } from "@/components/ui/section";
import { Expense } from "@/types";
import { Pie, PieChart, Tooltip } from "recharts";
import { renderCustomizedLabel } from "./renderCustomizedLabel";
import { ChartContainer } from "@/components/ui/chart";

type Props = {
  data: Expense[];
};

export const ExpenseStatistics: FC<Props> = ({ data = [] }) => {
  return (
    <Section title="Expense Statistics">
      <div className=" bg-white p-6 rounded-[25px] w-[350px] h-[370px]">
        <ChartContainer config={{}} className="size-full">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              stroke="#FFFFFF"
              outerRadius="100%"
              labelLine={false}
              strokeWidth={5}
              label={renderCustomizedLabel}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const { name, value } = payload[0];
                return (
                  <div className="bg-white/90 text-black font-semibold text-18 rounded-[8px] p-2">
                    <p>
                      {name}: {value}%
                    </p>
                  </div>
                );
              }}
            />
          </PieChart>
        </ChartContainer>
      </div>
    </Section>
  );
};
