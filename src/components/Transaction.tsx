import { FC } from "react";
import { Transaction as TransactionType, TransactionSource } from "@/types";
import { formatMoney } from "@/lib/format";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

type Props = {
  transaction: TransactionType;
};

export const Transaction: FC<Props> = ({ transaction }) => {
  const { date, amount, icon, description, currency, type, source, id } = transaction;
  const isDeposit = type === "deposit";

  return (
    <NavLink
      to={`/transactions/${id}`}
      className="flex items-center justify-between font-medium text-16"
    >
      <div className="flex items-center gap-4">
        <div className={cn("w-[55px] h-[55px] rounded-full flex-center", iconVariants[source])}>
          <img src={icon} alt="transaction icon" />
        </div>

        <div>
          <h3 className="text-[#232323]">{description}</h3>
          <p className="text-15 font-normal text-blue-400">{date}</p>
        </div>
      </div>

      <div className={cn("text-[18px] text-green-300", { "text-red-300": !isDeposit })}>
        {isDeposit ? "+" : "-"}
        {formatMoney(amount, currency.code, 0)}
      </div>
    </NavLink>
  );
};

const iconVariants: Record<TransactionSource, string> = {
  card: "bg-[#FFF5D9]",
  paypal: "bg-[#E7EDFF]",
  deposit: "bg-[#DCFAF8]",
  withdrawal: "bg-[#FADCF8]",
};
