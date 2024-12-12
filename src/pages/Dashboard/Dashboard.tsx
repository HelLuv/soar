import { FC } from "react";
import { accounts } from "@/mock/accounts";
import { BankCards, RecentTransactions } from "@/modules/dashboard";

const Dashboard: FC = () => {
  return (
    <section>
      <div className="flex gap-8">
        <BankCards accounts={accounts} />
        <RecentTransactions />
      </div>
    </section>
  );
};

export default Dashboard;
