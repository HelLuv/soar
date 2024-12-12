import { FC } from "react";
import { BankCard } from "@/components/BankCard";
import { accounts } from "@/mock/accounts";

const Dashboard: FC = () => {
  return (
    <section>
      <div className="flex gap-8">
        {accounts.length && <BankCard account={accounts[0]} variant="dark" />}
        {accounts[1] && <BankCard account={accounts[1]} variant="light" />}
      </div>
    </section>
  );
};

export default Dashboard;
