import { Section } from "@/components/ui/section";
import { Transaction as TransactionType } from "@/types";
import { FC } from "react";
import { Transaction } from "@/components/Transaction";
import { cn } from "@/lib/utils";

type Props = {
  transactions: TransactionType[];
  className?: string;
};

export const RecentTransactions: FC<Props> = ({ transactions = [], className }) => {
  return (
    <Section
      title="Recent Transactions"
      className={cn("w-[350px] min-w-[350px] h-[285px] ", className)}
    >
      <div className="px-4 py-6 bg-white rounded-[25px] flex flex-col gap-[10px]">
        {transactions.slice(0, 3).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </Section>
  );
};
