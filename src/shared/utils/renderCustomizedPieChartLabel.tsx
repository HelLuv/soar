import { PieLabelRenderProps } from "recharts";

export const renderCustomizedPieChartLabel = (props: PieLabelRenderProps, valuePostfix = "") => {
  const { cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, payload } = props;
  const value = payload.value as number;
  const name = payload.name as string;

  const RADIAN = Math.PI / 180;
  const offset = 15;
  const radius =
    (innerRadius as number) + ((outerRadius as number) - (innerRadius as number)) * 0.5 + offset;
  const x = (cx as number) + radius * Math.cos(-midAngle * RADIAN);
  const y = (cy as number) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Inter', sans-serif"
      fontSize={14}
      fontWeight={700}
    >
      <tspan x={x} dy="-0.5em" fontSize={18}>{`${value}${valuePostfix}`}</tspan>
      <tspan x={x} dy="1.2em">
        {name}
      </tspan>
    </text>
  );
};
