import { FC } from "react";
import { Account } from "@/shared/types/financial.types";
import { NavLink } from "react-router";
import { formatCardDate } from "@/shared/utils/format";
import ChipCard from "@/assets/images/chip-card.png";
import MastercardIcon from "@/assets/icons/solid/mastercard.svg?react";
import { cn } from "@/shared/utils/cn";
import CountUp from "react-countup";

export type BankCardVariant = "dark" | "light";

type Props = {
  account: Account;
  variant?: BankCardVariant;
};

export const BankCard: FC<Props> = ({ account, variant = "dark" }) => {
  const currentStyle = variantStyles[variant];

  return (
    <NavLink to={`/credit-cards/${account.id}`} className={cn("bank-card", currentStyle.container)}>
      <div className="bank-card_content">
        <div className="bank-card_info">
          <div className="flex justify-between mb-8 max-sm:mb-4">
            <div>
              <span className={cn("text-12", currentStyle.balanceLabel)}>Balance</span>
              <h2 className="text-20 font-semibold max-sm:text-16">
                <CountUp end={account.currentBalance} decimal="." prefix="$" decimals={2} />
              </h2>
            </div>

            <img
              src={ChipCard}
              alt="chip card"
              className={cn("size-9 max-sm:size-7", currentStyle.chipImage)}
            />
          </div>

          <div className="flex gap-[70px]">
            <div className="flex flex-col">
              <span className={cn("text-12 max-sm:text-10", currentStyle.detailLabel)}>CARD HOLDER</span>
              <h2 className="text-15 font-semibold max-sm:text-13">{account.ownerName}</h2>
            </div>
            <div className="flex flex-col">
              <span className={cn("text-12 max-sm:text-10", currentStyle.detailLabel)}>VALID THRU</span>
              <h2 className="text-15 font-semibold max-sm:text-13">
                {formatCardDate(account.validityDate)}
              </h2>
            </div>
          </div>
        </div>

        <div className={cn("bank-card_number", currentStyle.cardNumber)}>
          <p className="text-22 font-semibold max-sm:text-15">
            {account.prefixMask} **** **** {account.postfixMask}
          </p>
          <MastercardIcon className={cn(currentStyle.masterCardIcon, "max-sm:w-7 max-sm:h-5")} />
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
    balanceLabel: "text-blue-400",
    detailLabel: "text-blue-400",
    cardNumber: "border-t border-[#DFEAF2]",
    masterCardIcon: "brightness-50",
    chipImage: "brightness-[25%]",
  },
};
