import { Transaction } from "@/shared/types/financial";

export const transactions: Transaction[] = [
  {
    id: "9991081f-4141-4863-b963-2774e1607198",
    description: "Deposit from my Card",
    date: "2021-01-28",
    amount: 850,
    icon: "/images/cards.svg",
    type: "withdrawal",
    currency: {
      code: "USD",
      symbol: "$",
    },
    accountNumber: "111234",
    source: "card",
  },
  {
    id: "2341081f-4141-4863-b963-2774e1607198",
    description: "Deposit Paypal",
    date: "2021-01-25",
    amount: 2500,
    icon: "/images/paypal.svg",
    type: "deposit",
    currency: {
      code: "USD",
      symbol: "$",
    },
    accountNumber: "992345",
    source: "paypal",
  },
  {
    id: "1111081f-4141-4863-b963-2774e1607198",
    description: "Jemi Wilson",
    date: "2021-01-21",
    amount: 5400,
    icon: "/images/usd-coin.svg",
    type: "deposit",
    currency: {
      code: "USD",
      symbol: "$",
    },
    accountNumber: "8746764",
    source: "deposit",
  },
  {
    id: "2222081f-4141-4863-b963-2774e1607198",
    description: "Jemi Wilson",
    date: "2021-01-21",
    amount: 5400,
    icon: "/images/usd-coin.svg",
    type: "deposit",
    currency: {
      code: "USD",
      symbol: "$",
    },
    accountNumber: "8746764",
    source: "deposit",
  },
];
