import { Section } from "@/components/ui/section";
import { Transaction as TransactionType } from "@/types";
import { FC } from "react";
import { Transaction } from "@/components/Transaction";

type Props = {
  transactions: TransactionType[];
};

export const RecentTransactions: FC<Props> = ({ transactions = [] }) => {
  return (
    <Section title="Recent Transactions" className="w-[350px] h-[235px]">
      <div className="p-6 bg-white rounded-lg flex flex-col gap-[10px]">
        {transactions.slice(0, 3).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </Section>
  );
};
