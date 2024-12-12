import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js";
import { Section } from "@/components/ui/section";
import { Activity } from "@/types";
import { weeklyActivityDataAdapter } from "./weeklyActivityDataAdapter";

Chart.register(Tooltip, Legend, CategoryScale, LinearScale, BarElement);

type Props = {
  data: Activity[];
};

export const WeeklyActivity: FC<Props> = ({ data = [] }) => {
  const { barData, options } = weeklyActivityDataAdapter(data);

  return (
    <Section title="Weekly Activity">
      <div className="p-6 bg-white rounded-[25px] w-[730px] h-[370px]">
        <Bar data={barData} options={options} />
      </div>
    </Section>
  );
};
