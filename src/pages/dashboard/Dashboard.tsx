import { FC } from "react";
import {
  BalanceHistory,
  BankCards,
  ExpenseStatistics,
  QuickTransfer,
  RecentTransactions,
  WeeklyActivity,
} from "@/modules/dashboard/components";
import { useDashboardStore } from "@/modules/dashboard/stores/dashboard";

const Dashboard: FC = () => {
  const { balanceHistory, expenseStatistics, users, accounts, weeklyActivity, transactions } =
    useDashboardStore();

  return (
    <section className="flex flex-col gap-8 max-md:gap-5">
      <div className="flex gap-x-8 gap-y-5 flex-wrap">
        <BankCards accounts={accounts} />
        <RecentTransactions transactions={transactions} />
      </div>

      <div className="flex gap-x-8 gap-y-5 flex-wrap">
        <WeeklyActivity
          data={weeklyActivity}
          wrapperClassName="max-2xl:w-full"
          sectionClassName="max-2xl:w-full"
        />
        <ExpenseStatistics data={expenseStatistics} />
      </div>

      <div className="flex gap-x-8 gap-y-5 flex-wrap">
        <QuickTransfer users={users} />
        <BalanceHistory data={balanceHistory} />
      </div>
    </section>
  );
};

export default Dashboard;
