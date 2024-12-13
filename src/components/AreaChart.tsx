import {
  Area,
  AreaChart as ReAreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FC } from "react";
import { getMonth } from "@/lib/format";

type Props = {
  data: unknown[];
  dataKey: string;
};

export const AreaChart: FC<Props> = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer>
      <ReAreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: -20,
          bottom: -10,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#2D60FF" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#DFE5EE" />
        <XAxis
          dataKey={dataKey}
          tick={{ fill: "#718EBF", fontSize: 14 }}
          axisLine={{ stroke: "#DFE5EE", strokeDasharray: "3 3" }}
          tickCount={data.length}
          tickFormatter={(value) => getMonth(value, "short")}
        />
        <YAxis
          tick={{ fill: "#718EBF", fontSize: 14 }}
          axisLine={{ stroke: "#DFE5EE", strokeDasharray: "3 3" }}
        />

        <Tooltip
          contentStyle={{
            borderRadius: "12px",
            border: "1px solid #e6eff5",
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#1814F3"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
        <Line type="monotone" dataKey="value" stroke="#1814F3" strokeWidth={3} dot={false} />
      </ReAreaChart>
    </ResponsiveContainer>
  );
};
