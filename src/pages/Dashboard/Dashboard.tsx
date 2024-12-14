import { FC } from "react";
import {
  BalanceHistory,
  BankCards,
  ExpenseStatistics,
  QuickTransfer,
  RecentTransactions,
  WeeklyActivity,
} from "@/modules/dashboard";
import { accounts } from "@/mock/accounts";
import { transactions } from "@/mock/transactions";
import { weeklyActivity } from "@/mock/weekly-activity";
import { expenseStatistics } from "@/mock/expense-statistics";
import { balanceHistory } from "@/mock/balance-history";
import { users } from "@/mock/users";

const Dashboard: FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex gap-x-8 gap-y-4 flex-wrap">
        <BankCards accounts={accounts} />
        <RecentTransactions transactions={transactions} />
      </div>

      <div className="flex gap-x-8 gap-y-4 flex-wrap">
        <WeeklyActivity
          data={weeklyActivity}
          wrapperClassName="max-2xl:w-full"
          sectionClassName="max-2xl:w-full"
        />
        <ExpenseStatistics data={expenseStatistics} />
      </div>

      <div className="flex gap-x-8 gap-y-4 flex-wrap">
        <QuickTransfer users={users} />
        <BalanceHistory data={balanceHistory} />
      </div>
    </section>
  );
};

export default Dashboard;
