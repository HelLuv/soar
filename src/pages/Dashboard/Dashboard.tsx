import { FC } from "react";
import { BankCards, RecentTransactions, WeeklyActivity } from "@/modules/dashboard";
import { accounts } from "@/mock/accounts";
import { transactions } from "@/mock/transactions";
import { weeklyActivity } from "@/mock/weekly-activity";

const Dashboard: FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex gap-8">
        <BankCards accounts={accounts} />
        <RecentTransactions transactions={transactions} />
      </div>

      <div>
        <WeeklyActivity data={weeklyActivity} />
      </div>
    </section>
  );
};

export default Dashboard;
