import React from "react";
import HomeIcon from "@/assets/icons/solid/home.svg?react";
import SettingsIcon from "@/assets/icons/solid/settings.svg?react";
import TransactionsIcon from "@/assets/icons/solid/transfer.svg?react";
import UserIcon from "@/assets/icons/solid/user.svg?react";
import InvestmentIcon from "@/assets/icons/solid/investment.svg?react";
import CreditCardIcon from "@/assets/icons/solid/credit-card.svg?react";
import LoanIcon from "@/assets/icons/solid/loan.svg?react";
import ServiceIcon from "@/assets/icons/solid/service.svg?react";
import PrivilegesIcon from "@/assets/icons/solid/econometrics.svg?react";

export type SidebarLink = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  route: string;
  label: string;
};

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    Icon: HomeIcon,
    route: "/",
    label: "Dashboard",
  },
  {
    Icon: TransactionsIcon,
    route: "/transactions",
    label: "Transactions",
  },
  {
    Icon: UserIcon,
    route: "/account",
    label: "Account",
  },
  {
    Icon: InvestmentIcon,
    route: "/investments",
    label: "Investments",
  },
  {
    Icon: CreditCardIcon,
    route: "/credit-cards",
    label: "Credit Cards",
  },
  {
    Icon: LoanIcon,
    route: "/loans",
    label: "Loans",
  },
  {
    Icon: ServiceIcon,
    route: "/services",
    label: "Services",
  },
  {
    Icon: PrivilegesIcon,
    route: "/my-privileges",
    label: "My Privileges",
  },
  {
    Icon: SettingsIcon,
    route: "/settings",
    label: "Settings",
  },
];
