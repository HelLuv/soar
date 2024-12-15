import { FC } from "react";
import { cn } from "@/shared/utils/cn";
import { Section } from "@/shared/ui/section";
import { Transaction } from "@/shared/components";
import { Transaction as TransactionType } from "@/shared/types/financial";

type Props = {
  transactions: TransactionType[];
  className?: string;
};

export const RecentTransactions: FC<Props> = ({ transactions = [], className }) => {
  return (
    <Section
      title="Recent Transactions"
      className={cn("w-[350px] min-w-[350px] h-[285px] max-md:w-full max-sm:h-[245px] max-sm:min-w-full max-sm:w-full", className)}
    >
      <div className="px-4 py-6 bg-white rounded-[25px] flex flex-col gap-[10px] max-sm:py-4">
        {transactions.slice(0, 3).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </Section>
  );
};
