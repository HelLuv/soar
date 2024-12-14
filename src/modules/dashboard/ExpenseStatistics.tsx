import { FC } from "react";
import { Section } from "@/components/ui/section";
import { Expense } from "@/types";
import { PieChart } from "@/components/PieChart";

type Props = {
  data: Expense[];
};

export const ExpenseStatistics: FC<Props> = ({ data = [] }) => {
  return (
    <Section title="Expense Statistics" className="max-md:w-full">
      <div className="bg-white p-6 rounded-[25px] w-[350px] h-[370px] max-md:w-full">
        <PieChart data={data} valuePostfix="%" />
      </div>
    </Section>
  );
};
