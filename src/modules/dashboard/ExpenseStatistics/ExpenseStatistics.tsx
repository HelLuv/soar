import { FC } from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Section } from "@/components/ui/section";
import { Expense } from "@/types";
import { expenseStatisticsDataAdapter } from "./expenseStatisticsDataAdapter";

Chart.register(Tooltip, Legend, ArcElement, ChartDataLabels);

type Props = {
  data: Expense[];
};

export const ExpenseStatistics: FC<Props> = ({ data = [] }) => {
  const { pieData, options } = expenseStatisticsDataAdapter(data);

  return (
    <Section title="Expense Statistics">
      <div className="p-6 bg-white rounded-[25px] w-[350px] h-[370px]">
        <Pie data={pieData} options={options} />
      </div>
    </Section>
  );
};
