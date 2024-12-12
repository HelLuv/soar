import { ComponentProps } from "react";
import { Pie } from "react-chartjs-2";
import { Expense } from "@/types";
import { Chart } from "chart.js";

type PieProps = ComponentProps<typeof Pie>;

export const expenseStatisticsDataAdapter = (data: Expense[]) => {
  const pieData: PieProps["data"] = {
    datasets: [
      {
        label: " ",
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.fill),
        borderColor: "#fff",
        hoverOffset: 20,
        offset: 10,
      },
    ],
    labels: data.map((item) => item.name),
  };

  const options: PieProps["options"] = {
    plugins: {
      datalabels: {
        color: "#fff",
        formatter: (value: number, context: { chart: Chart; dataIndex: number }) => {
          const label = context.chart.data.labels?.[context.dataIndex];
          return `${value}%\n${label}`;
        },
        anchor: "center",
        align: "start",
        offset: -60,
        font: {
          weight: "bold",
          size: 15,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    rotation: 220,
    responsive: true,
  };

  return {
    pieData,
    options,
  };
};
