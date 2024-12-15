import { FC } from "react";
import { NavLink } from "react-router";
import { Section } from "@/shared/ui/section";
import { BankCard } from "@/shared/components";
import { Account } from "@/shared/types/financial.types";

type Props = {
  accounts: Account[];
};

export const BankCards: FC<Props> = ({ accounts }) => {
  return (
    <Section
      title="My Cards"
      extra={
        <NavLink to="/credit-cards" className="text-blue-800 text-18 font-semibold max-md:text-14 hover:text-black">
          See all
        </NavLink>
      }
      className="max-lg:w-full"
    >
      <div className="bank-cards-wrapper">
        {accounts.length > 0 && <BankCard account={accounts[0]} variant="dark" />}
        {accounts[1] && <BankCard account={accounts[1]} variant="light" />}
      </div>
    </Section>
  );
};
