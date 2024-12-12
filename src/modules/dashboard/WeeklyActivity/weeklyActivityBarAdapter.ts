import { getDayOfWeek } from "@/lib/format/getDayOfWeek";
import { ComponentProps } from "react";
import { Bar } from "react-chartjs-2";
import { Activity } from "@/types";

type BarProps = ComponentProps<typeof Bar>;

export const weeklyActivityBarAdapter = (data: Activity[]) => {
  const barData: BarProps["data"] = {
    datasets: [
      {
        label: "Deposit",
        data: data.map((item) => item.deposit),
        backgroundColor: ["#232323"],
        borderRadius: [30],
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: "Withdraw",
        data: data.map((item) => item.withdraw),
        backgroundColor: ["#396AFF"],
        borderRadius: [30],
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
    labels: data.map((item) => getDayOfWeek(item.date, "short")),
  };

  const options: BarProps["options"] = {
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#718EBF",
          font: {
            size: 15,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF",
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#F3F3F5",
        },
        ticks: {
          stepSize: 100,
          color: "#718EBF",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return { barData, options };
};
