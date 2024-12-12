import { FC } from "react";
import { Account } from "@/types";
import { NavLink } from "react-router";
import { formatCardDate, formatMoney } from "@/lib/format";
import ChipCard from "@/assets/images/chip-card.png";
import MastercardIcon from "@/assets/icons/solid/mastercard.svg?react";
import { cn } from "@/lib/utils";

export type BankCardVariant = "dark" | "light";

type Props = {
  account: Account;
  variant?: BankCardVariant;
};

export const BankCard: FC<Props> = ({ account, variant = "dark" }) => {
  const currentStyle = variantStyles[variant];

  return (
    <NavLink
      to={`/transactions/?id=${account.id}`}
      className={cn("bank-card", currentStyle.container)}
    >
      <div className="bank-card_content">
        <div className="bank-card_info">
          <div className="flex justify-between mb-8">
            <div>
              <span className={`text-12 ${currentStyle.balanceLabel}`}>Balance</span>
              <h2 className="text-20 font-semibold">{formatMoney(account.currentBalance)}</h2>
            </div>

            <img src={ChipCard} alt="chip card" className={cn("size-9", currentStyle.chipImage)} />
          </div>

          <div className="flex gap-[70px]">
            <div className="flex flex-col">
              <span className={`text-12 ${currentStyle.detailLabel}`}>CARD HOLDER</span>
              <h2 className="text-15 font-semibold">{account.ownerName}</h2>
            </div>
            <div className="flex flex-col">
              <span className={`text-12 ${currentStyle.detailLabel}`}>VALID THRU</span>
              <h2 className="text-15 font-semibold">{formatCardDate(account.validityDate)}</h2>
            </div>
          </div>
        </div>

        <div className={cn("bank-card_number", currentStyle.cardNumber)}>
          <p className="text-22 font-semibold">
            {account.prefixMask} **** **** {account.postfixMask}
          </p>
          <MastercardIcon className={currentStyle.masterCardIcon} />
        </div>
      </div>
    </NavLink>
  );
};

const variantStyles = {
  dark: {
    container: "text-white border-white dark-gradient-1",
    balanceLabel: "text-[#FFFFFFB2]",
    detailLabel: "text-[#FFFFFFB2]",
    cardNumber: "",
    masterCardIcon: "",
    chipImage: "",
  },
  light: {
    container: "text-black bg-white border-[#DFEAF2]",
    balanceLabel: "text-[#718EBF]",
    detailLabel: "text-[#718EBF]",
    cardNumber: "border-t border-[#DFEAF2]",
    masterCardIcon: "brightness-50",
    chipImage: "brightness-[25%]",
  },
};
