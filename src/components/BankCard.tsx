import { FC } from "react";
import { Account } from "@/types";
import { NavLink } from "react-router";
import { formatCardDate, formatMoney } from "@/lib/format";
import ChipCard from "@/assets/images/chip-card.png";
import MastercardIcon from "@/assets/icons/solid/mastercard.svg?react";

export type BankCardVariant = "dark" | "light";

type Props = {
  account: Account;
  variant?: BankCardVariant;
};

export const BankCard: FC<Props> = ({ account, variant = "dark" }) => {
  return (
    <div className="flex flex-col text-white font-normal">
      <NavLink to={`/transactions/?id=${account.id}`} className="bank-card">
        <div className="bank-card_content">
          <div className="bank-card_info">
            <div className="flex justify-between mb-8">
              <div>
                <span className="text-12">Balance</span>
                <h2 className="text-20 font-semibold">{formatMoney(account.currentBalance)}</h2>
              </div>

              <img src={ChipCard} alt="chip card" className="size-9" />
            </div>

            <div className="flex gap-[70px]">
              <div className="flex flex-col">
                <span className="text-12 text-[#FFFFFFB2]">CARD HOLDER</span>
                <h2 className="text-15 font-semibold">{account.ownerName}</h2>
              </div>
              <div className="flex flex-col">
                <span className="text-12 text-[#FFFFFFB2]">VALID THRU</span>
                <h2 className="text-15 font-semibold">{formatCardDate(account.validityDate)}</h2>
              </div>
            </div>
          </div>

          <div className="bank-card_number">
            <p className="text-22 font-semibold">
              {account.prefixMask} **** **** {account.postfixMask}
            </p>
            <MastercardIcon />
          </div>
        </div>
      </NavLink>
    </div>
  );
};
