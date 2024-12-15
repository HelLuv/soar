import { FC } from "react";
import { Transaction as TransactionType, TransactionSource } from "@/shared/types/financial.types";
import { formatMoney } from "@/shared/utils/format";
import { cn } from "@/shared/utils/cn";
import { NavLink } from "react-router";
import { format as formatter } from "date-fns";

type Props = {
  transaction: TransactionType;
  dateFormat?: string;
};

export const Transaction: FC<Props> = ({ transaction, dateFormat = "d MMMM yyyy" }) => {
  const { date, amount, icon, description, currency, type, source, id } = transaction;
  const isDeposit = type === "deposit";

  return (
    <NavLink
      to={`/transactions/${id}`}
      className="transaction"
    >
      <div className="flex items-center gap-4">
        <div className={cn("size-[55px] rounded-full flex-center max-sm:size-[50px]", iconVariants[source])}>
          <img src={icon} alt="transaction icon" />
        </div>

        <div>
          <h3 className="text-[#232323] max-sm:text-14">{description}</h3>
          <p className="text-15 font-normal text-blue-400 max-sm:text-12">{formatter(date, dateFormat)}</p>
        </div>
      </div>

      <div className={cn("text-[18px] text-green-300 max-sm:text-16", { "text-red-300": !isDeposit })}>
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
