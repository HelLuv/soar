import { FC } from "react";
import { BankCards, RecentTransactions } from "@/modules/dashboard";
import { accounts } from "@/mock/accounts";
import { transactions } from "@/mock/transactions";

const Dashboard: FC = () => {
  return (
    <section>
      <div className="flex gap-8">
        <BankCards accounts={accounts} />
        <RecentTransactions transactions={transactions} />
      </div>
    </section>
  );
};

export default Dashboard;
